#!/bin/bash

# JB SQUARE 와이어프레임 EC2 배포 스크립트
# 포트: 3300
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
pm2 stop jb-square-rev2 || true
pm2 delete jb-square-rev2 || true

# PM2로 애플리케이션 시작
echo "🚀 애플리케이션 시작 중..."
pm2 start npm --name "jb-square-rev2" -- run start:prod

# PM2 자동 시작 설정
pm2 startup
pm2 save

# Nginx 설정
echo "🌐 Nginx 설정 중..."

# 기존 와일드카드 설정 백업
sudo mv /etc/nginx/conf.d/jb-square-wireframe.conf /etc/nginx/conf.d/jb-square-wireframe.conf.bak 2>/dev/null || true

# jb2rev2.viahub.dev 도메인 설정 (SSL 포함)
sudo tee /etc/nginx/conf.d/00-jb2rev2.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name jb2rev2.viahub.dev;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name jb2rev2.viahub.dev;

    # SSL 인증서 설정
    ssl_certificate     /etc/letsencrypt/live/viahub.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/viahub.dev/privkey.pem;

    # SSL 최적화
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # 버퍼 설정
    proxy_buffer_size       128k;
    proxy_buffers           4 256k;
    proxy_busy_buffers_size 256k;

    # 헬스체크 엔드포인트
    location = /healthz { 
        return 200 "OK"; 
        add_header Content-Type text/plain;
    }

    # 메인 애플리케이션
    location / {
        proxy_pass http://127.0.0.1:3300;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
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

# 방화벽 설정 (포트 80, 443, 3300 열기)
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --permanent --add-port=3300/tcp
sudo firewall-cmd --reload

# 상태 확인
echo "✅ 배포 완료!"

# 퍼블릭 IP 확인
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
echo "🌐 퍼블릭 IP: $PUBLIC_IP"

# 로컬 검증
echo "🔍 로컬 검증 중..."
echo "1. 백엔드 직접 접속 테스트:"
curl -I http://127.0.0.1:3300 2>/dev/null | head -1 || echo "❌ 백엔드 접속 실패"

echo "2. HTTP → HTTPS 리다이렉트 테스트:"
curl -I http://localhost 2>/dev/null | head -1 || echo "❌ HTTP 리다이렉트 실패"

echo "3. HTTPS 프록시 테스트:"
curl -I -k https://localhost 2>/dev/null | head -1 || echo "❌ HTTPS 프록시 실패"

echo "4. 헬스체크 테스트:"
curl -I -k https://localhost/healthz 2>/dev/null | head -1 || echo "❌ 헬스체크 실패"

# PM2 상태
echo "📊 PM2 상태:"
pm2 status

# 접속 정보
echo ""
echo "🎯 접속 정보:"
echo "   도메인: https://jb2rev2.viahub.dev"
echo "   IP 직접: https://$PUBLIC_IP"
echo "   헬스체크: https://jb2rev2.viahub.dev/healthz"
echo ""
echo "📝 관리 명령어:"
echo "   로그 확인: pm2 logs jb-square-rev2"
echo "   재시작: pm2 restart jb-square-rev2"
echo "   Nginx 로그: sudo tail -f /var/log/nginx/error.log"
