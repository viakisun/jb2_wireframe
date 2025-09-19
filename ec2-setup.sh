#!/bin/bash

# EC2에서 실행할 설정 스크립트
# 이 스크립트를 EC2에 업로드하고 실행하세요

echo "🚀 JB SQUARE 와이어프레임 EC2 설정 시작..."

# 시스템 업데이트
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

# 프로젝트 디렉토리 생성
mkdir -p /home/ec2-user/jb2_wireframe
cd /home/ec2-user/jb2_wireframe

# 프로젝트 파일이 이미 업로드되어 있다고 가정
# 의존성 설치
echo "📦 의존성 설치 중..."
npm install --production

# 프로덕션 빌드
echo "🔨 프로덕션 빌드 중..."
npm run build

# PM2로 애플리케이션 시작
echo "🚀 애플리케이션 시작 중..."
pm2 start npm --name "jb-square-wireframe" -- run start:prod

# PM2 자동 시작 설정
pm2 startup
pm2 save

# Nginx 설정
echo "🌐 Nginx 설정 중..."
sudo tee /etc/nginx/conf.d/jb-square-wireframe.conf << 'NGINX_EOF'
server {
    listen 80;
    server_name _;  # 모든 도메인 허용

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
NGINX_EOF

# Nginx 시작 및 자동 시작 설정
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl reload nginx

# 방화벽 설정 (포트 80, 3100 열기)
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=3100/tcp
sudo firewall-cmd --reload

echo "✅ 설정 완료!"
echo "🌐 애플리케이션: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo "📊 PM2 상태: pm2 status"
echo "📝 로그 확인: pm2 logs jb-square-wireframe"
echo "🔄 재시작: pm2 restart jb-square-wireframe"
