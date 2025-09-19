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
sudo tee /etc/nginx/conf.d/jb-square-wireframe.conf << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3100;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Nginx 시작 및 자동 시작 설정
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl reload nginx

# 방화벽 설정 (포트 80, 3100 열기)
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=3100/tcp
sudo firewall-cmd --reload

# 상태 확인
echo "✅ 배포 완료!"
echo "🌐 애플리케이션: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo "📊 PM2 상태:"
pm2 status
echo "📝 로그 확인: pm2 logs jb-square-wireframe"
echo "🔄 재시작: pm2 restart jb-square-wireframe"
