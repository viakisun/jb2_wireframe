#!/bin/bash

# JB SQUARE 와이어프레임 EC2 배포 스크립트
# 포트: 3100

echo "🚀 JB SQUARE 와이어프레임 EC2 배포 시작..."

# EC2 인스턴스 정보 (이전에 알려주신 경로)
EC2_HOST="your-ec2-host.amazonaws.com"
EC2_USER="ec2-user"
EC2_KEY="~/.ssh/your-key.pem"
EC2_PATH="/home/ec2-user/jb2_wireframe"

# 로컬에서 빌드
echo "📦 로컬에서 프로덕션 빌드 중..."
npm run build

# EC2에 파일 업로드
echo "📤 EC2에 파일 업로드 중..."
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '*.log' \
  -e "ssh -i $EC2_KEY" \
  ./ $EC2_USER@$EC2_HOST:$EC2_PATH/

# EC2에서 배포 실행
echo "🔧 EC2에서 배포 설정 중..."
ssh -i $EC2_KEY $EC2_USER@$EC2_HOST << 'EOF'
cd /home/ec2-user/jb2_wireframe

# Node.js 및 npm 업데이트
echo "📦 Node.js 환경 설정 중..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 의존성 설치
echo "📦 의존성 설치 중..."
npm install --production

# PM2 설치 및 설정
echo "🔧 PM2 설정 중..."
sudo npm install -g pm2

# 기존 프로세스 종료
pm2 stop jb-square-wireframe || true
pm2 delete jb-square-wireframe || true

# 새 프로세스 시작
echo "🚀 애플리케이션 시작 중..."
pm2 start npm --name "jb-square-wireframe" -- run start:prod

# PM2 자동 시작 설정
pm2 startup
pm2 save

# Nginx 설정 (포트 80 -> 3100)
echo "🌐 Nginx 설정 중..."
sudo tee /etc/nginx/sites-available/jb-square-wireframe << 'NGINX_EOF'
server {
    listen 80;
    server_name your-domain.com;  # 실제 도메인으로 변경

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

# Nginx 사이트 활성화
sudo ln -sf /etc/nginx/sites-available/jb-square-wireframe /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

echo "✅ 배포 완료!"
echo "🌐 애플리케이션: http://your-domain.com"
echo "📊 PM2 상태: pm2 status"
echo "📝 로그 확인: pm2 logs jb-square-wireframe"
EOF

echo "🎉 배포가 완료되었습니다!"
echo "🌐 애플리케이션: http://$EC2_HOST"
echo "📊 상태 확인: ssh -i $EC2_KEY $EC2_USER@$EC2_HOST 'pm2 status'"
