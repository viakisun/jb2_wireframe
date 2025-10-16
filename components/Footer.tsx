import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          {/* Brand Section */}
          <div className="flex-[2]" style={{ marginBottom: '48px' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">JB²</span>
              </div>
              <h3 className="text-xl font-bold text-white">JB SQUARE</h3>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 text-base">뉴스레터 구독</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  구독
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2">구독 완료되었습니다!</p>
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a href="https://facebook.com/jbsquare" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/jbsquare" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/jbsquare" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 공백 */}
          <div className="hidden lg:block flex-1"></div>
          
          {/* 주요 서비스 */}
          <div className="flex-1" style={{ marginBottom: '48px' }}>
            <h4 className="font-bold mb-6 text-white text-base">주요 서비스</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/announcements" className="hover:text-white transition-colors">
                  지원사업 공고
                </a>
              </li>
              <li>
                <a href="/incubator" className="hover:text-white transition-colors">
                  창업보육센터
                </a>
              </li>
              <li>
                <a href="/companies" className="hover:text-white transition-colors">
                  기업 디렉토리
                </a>
              </li>
              <li>
                <a href="/policy/investment" className="hover:text-white transition-colors">
                  투자 지원
                </a>
              </li>
              <li>
                <a href="/news-events" className="hover:text-white transition-colors">
                  뉴스 & 행사
                </a>
              </li>
            </ul>
          </div>

          {/* 공백 */}
          <div className="hidden lg:block flex-[0.5]"></div>

          {/* 정책 & 제도 */}
          <div className="flex-1" style={{ marginBottom: '48px' }}>
            <h4 className="font-bold mb-6 text-white text-base">정책 & 제도</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/policy/guide" className="hover:text-white transition-colors">
                  사업 가이드
                </a>
              </li>
              <li>
                <a href="/policy/incentives" className="hover:text-white transition-colors">
                  인센티브
                </a>
              </li>
              <li>
                <a href="/policy/regulations" className="hover:text-white transition-colors">
                  규제 혁신
                </a>
              </li>
              <li>
                <a href="/policy/investment/jbfez" className="hover:text-white transition-colors">
                  JBFEZ 특구
                </a>
              </li>
              <li>
                <a href="/organizations" className="hover:text-white transition-colors">
                  관련 기관
                </a>
              </li>
            </ul>
          </div>

          {/* 공백 */}
          <div className="hidden lg:block flex-[0.5]"></div>
          
          {/* 연락처 정보 */}
          <div className="flex-1">
            <h4 className="font-bold mb-6 text-white text-base">연락처</h4>
            <div className="text-gray-400 text-sm space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white font-medium">대표전화</span>
                </div>
                <p>063-280-3700</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white font-medium">이메일</span>
                </div>
                <p>info@jbsquare.or.kr</p>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-white font-medium block">주소</span>
                    <p className="leading-relaxed">전북 전주시 덕진구 덕진산단로 123<br />JB SQUARE 바이오센터</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p className="mb-1">&copy; 2024 전북테크노파크 JB SQUARE. All rights reserved.</p>
              <p className="text-xs">대표자: 홍길동 | 사업자등록번호: 123-45-67890 | 통신판매업신고: 제2024-전주-0001호</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                개인정보처리방침
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                이용약관
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                사이트맵
              </a>
              <a href="/faq" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                FAQ
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

