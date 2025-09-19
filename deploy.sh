#!/bin/bash

# JB SQUARE 와이어프레임 EC2 배포 스크립트
# 포트: 3100
# EC2에서 직접 실행하는 스크립트

echo "🚀 JB SQUARE 와이어프레임 EC2 배포 시작..."

# 현재 위치 확인
echo "📍 현재 위치: $(pwd)"

# 시스템 업데이트
echo "📦 시스템 업데이트 중..."
sudo yum update -y

# Node.js 18 설치
echo "📦 Node.js 18 설치 중..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Nginx 설치
echo "🌐 Nginx 설치 중..."
sudo yum install -y nginx

# PM2 설치
echo "🔧 PM2 설치 중..."
sudo npm install -g pm2

# 기존 node_modules 정리
echo "🧹 기존 파일 정리 중..."
rm -rf node_modules
npm cache clean --force

# 의존성 설치 (개발 의존성 제외)
echo "📦 의존성 설치 중..."
npm install --omit=dev

# 프로덕션 빌드
echo "🔨 프로덕션 빌드 중..."
npm run build

# 빌드 확인
if [ ! -d ".next" ]; then
    echo "❌ 빌드 실패: .next 디렉토리가 생성되지 않았습니다."
    exit 1
fi
echo "✅ 빌드 완료: .next 디렉토리 확인됨"

# 기존 프로세스 종료
echo "🔄 기존 프로세스 정리 중..."
pm2 stop jb-square-wireframe || true
pm2 delete jb-square-wireframe || true

# PM2로 애플리케이션 시작
echo "🚀 애플리케이션 시작 중..."
pm2 start npm --name "jb-square-wireframe" -- run start:prod

# PM2 자동 시작 설정
pm2 startup
pm2 save

# Nginx 설정
echo "🌐 Nginx 설정 중..."

# 기존 와일드카드 설정 백업
sudo mv /etc/nginx/conf.d/jb-square-wireframe.conf /etc/nginx/conf.d/jb-square-wireframe.conf.bak 2>/dev/null || true

# jb2.viahub.dev 도메인 설정
sudo tee /etc/nginx/conf.d/jb2.conf << 'EOF'
server {
    listen 80;
    server_name jb2.viahub.dev;

    location / {
        proxy_pass http://127.0.0.1:3100;

        # 기본 프록시 헤더
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket/SSR 대응
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # 타임아웃/버퍼 (Next 정적 리소스 대비)
        proxy_read_timeout 120s;
        proxy_send_timeout 120s;
        proxy_buffering on;
        proxy_buffers 32 64k;
        proxy_busy_buffers_size 256k;
    }

    # 헬스체크용 간단 엔드포인트
    location = /healthz { 
        return 200; 
    }
}
EOF

# Nginx 시작 및 자동 시작 설정
sudo systemctl start nginx
sudo systemctl enable nginx

# Nginx 설정 테스트
echo "🔍 Nginx 설정 테스트 중..."
sudo nginx -t
if [ $? -ne 0 ]; then
    echo "❌ Nginx 설정 오류가 있습니다."
    exit 1
fi

# Nginx 재시작
sudo systemctl reload nginx

# 방화벽 설정 (포트 80, 3100 열기)
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=3100/tcp
sudo firewall-cmd --reload

# 상태 확인
echo "✅ 배포 완료!"

# 퍼블릭 IP 확인
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
echo "🌐 퍼블릭 IP: $PUBLIC_IP"

# 로컬 검증
echo "🔍 로컬 검증 중..."
echo "1. 백엔드 직접 접속 테스트:"
curl -I http://127.0.0.1:3100 2>/dev/null | head -1 || echo "❌ 백엔드 접속 실패"

echo "2. Nginx 프록시 테스트:"
curl -I http://localhost 2>/dev/null | head -1 || echo "❌ Nginx 프록시 실패"

echo "3. 헬스체크 테스트:"
curl -I http://localhost/healthz 2>/dev/null | head -1 || echo "❌ 헬스체크 실패"

# PM2 상태
echo "📊 PM2 상태:"
pm2 status

# 접속 정보
echo ""
echo "🎯 접속 정보:"
echo "   도메인: http://jb2.viahub.dev"
echo "   IP 직접: http://$PUBLIC_IP"
echo "   헬스체크: http://jb2.viahub.dev/healthz"
echo ""
echo "📝 관리 명령어:"
echo "   로그 확인: pm2 logs jb-square-wireframe"
echo "   재시작: pm2 restart jb-square-wireframe"
echo "   Nginx 로그: sudo tail -f /var/log/nginx/error.log"
