import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSearch from '../components/HeroSearch';
import { mockAnnouncements, mockIncubatorCenters, mockCompanies } from '../store/mockupStore';

const HomePage = () => {
  
  // Scroll progress effect
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* MEDCITY-style Background */}
        <div className="absolute inset-0">
          {/* Deep blue-purple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
          
          {/* Animated organic shapes overlay - MEDCITY style */}
          <div className="absolute inset-0">
            {/* Large glowing organic shapes like biological cells */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, rgba(103, 232, 249, 0.15) 50%, transparent 100%)'
            }}></div>
            <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.20) 0%, rgba(249, 168, 212, 0.10) 50%, transparent 100%)',
              animationDelay: '1s'
            }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.30) 0%, rgba(103, 232, 249, 0.15) 50%, transparent 100%)',
              animationDelay: '2s'
            }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-2xl animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(165, 180, 252, 0.12) 50%, transparent 100%)',
              animationDelay: '0.5s'
            }}></div>
            
            {/* Medium floating organic elements */}
            <div className="absolute top-1/2 left-1/5 w-32 h-32 rounded-full blur-xl animate-bounce" style={{
              background: 'radial-gradient(circle, rgba(52, 211, 153, 0.35) 0%, rgba(134, 239, 172, 0.20) 50%, transparent 100%)',
              animationDuration: '3s',
              animationDelay: '1.5s'
            }}></div>
            <div className="absolute top-3/4 right-1/5 w-40 h-40 rounded-full blur-xl animate-bounce" style={{
              background: 'radial-gradient(circle, rgba(251, 113, 133, 0.30) 0%, rgba(252, 165, 165, 0.15) 50%, transparent 100%)',
              animationDuration: '4s',
              animationDelay: '2.5s'
            }}></div>
            <div className="absolute bottom-1/2 right-1/2 w-28 h-28 rounded-full blur-lg animate-bounce" style={{
              background: 'radial-gradient(circle, rgba(103, 232, 249, 0.40) 0%, rgba(125, 211, 252, 0.25) 50%, transparent 100%)',
              animationDuration: '2.5s',
              animationDelay: '0.8s'
            }}></div>
            
            {/* Small cellular elements */}
            <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-cyan-400/40 rounded-full blur-md animate-pulse" style={{animationDuration: '2s', animationDelay: '3s'}}></div>
            <div className="absolute bottom-1/6 left-1/6 w-20 h-20 bg-emerald-400/35 rounded-full blur-md animate-pulse" style={{animationDuration: '1.8s', animationDelay: '1.2s'}}></div>
            <div className="absolute top-2/3 left-1/8 w-12 h-12 bg-magenta-400/45 rounded-full blur-sm animate-pulse" style={{animationDuration: '2.3s', animationDelay: '2.8s'}}></div>
            
            {/* Microscopic details */}
            <div className="absolute top-1/5 left-1/2 w-8 h-8 bg-blue-300/50 rounded-full blur-sm animate-ping" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/5 right-1/3 w-6 h-6 bg-purple-300/50 rounded-full blur-sm animate-ping" style={{animationDuration: '3s', animationDelay: '1.8s'}}></div>
            <div className="absolute top-3/4 left-2/3 w-10 h-10 bg-cyan-300/50 rounded-full blur-sm animate-ping" style={{animationDuration: '5s', animationDelay: '2.5s'}}></div>
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Main Headline */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              JB SQUARE
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              전북 바이오 생태계의 혁신 허브
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <HeroSearch />
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator - positioned at section level */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/70 text-xs font-medium">스크롤하여 더 알아보기</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
          <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-300 ease-out" 
               style={{ width: '0%' }} id="progress-bar"></div>
        </div>
      </section>

      {/* 지원사업 공고 */}
      <section className="py-12 lg:py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">지원사업 공고</h2>
            <p className="text-gray-400">바이오 기업 성장을 위한 지원사업</p>
          </div>
          
          {/* Filter Tabs - Dark Theme */}
          <div className="hidden lg:flex mb-8">
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
              {['전체', '창업', 'R&D', '투자'].map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    index === 0 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
                    </div>
          
          {/* Program Cards Grid - Dark Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockAnnouncements.map((announcement, index) => (
              <div key={announcement.id} className={`bg-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer ${
                index >= 4 ? 'lg:block hidden' : ''
              }`}>
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        announcement.category === '창업지원' ? 'bg-orange-500' :
                        announcement.category === 'R&D지원' ? 'bg-blue-500' :
                        announcement.category === '인큐베이팅' ? 'bg-purple-500' :
                        'bg-emerald-500'
                      }`}></div>
                      <span className="text-sm font-medium text-gray-300">
                        {announcement.category}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-red-900/50 text-red-400 rounded-full text-xs font-medium border border-red-800">
                      D-{announcement.remainingDays}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-semibold text-white leading-6 mb-3" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {announcement.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{announcement.amount}</span>
                    <div className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="text-xs">자세히</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>

          {/* Mobile 더보기 버튼 - Dark Theme */}
          <div className="lg:hidden text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-lg">
              전체 공고 보기
            </button>
          </div>
        </div>
      </section>


      {/* 바이오뉴스 & 행사 */}
      <section className="py-12 lg:py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">뉴스 & 행사</h2>
            <p className="text-gray-400">바이오 생태계 최신 동향과 주요 행사</p>
                    </div>

          {/* Featured Article */}
          <div className="mb-12">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/5">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center border border-blue-500">
                    <div className="text-center text-white">
                      <div className="text-3xl mb-2">📰</div>
                      <div className="text-sm font-medium">주요 소식</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      산업동향
                    </span>
                    <span className="text-sm text-gray-400">2024-09-15</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    전북 바이오 클러스터, 글로벌 바이오 허브로 도약
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    세계적인 바이오 기업들의 투자 러시가 이어지며 전북 바이오 클러스터가 글로벌 바이오 허브로서의 위상을 확립하고 있습니다.
                  </p>

                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    전체 읽기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* News & Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Latest News */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">최신 뉴스</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">더보기 →</button>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-slate-700 rounded-r-lg transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium border border-blue-500/30">기업소식</span>
                    <span className="text-xs text-gray-400">2024-09-12</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1 hover:text-blue-400 transition-colors cursor-pointer">
                    JB SQUARE 입주기업 3곳, 임상 승인 획득
                  </h4>
                  <p className="text-gray-400 text-sm">
                    혁신적인 바이오의약품 개발로 주목받는 입주기업들이 연이어 임상 승인을 받으며 성과를 거두고 있습니다.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-3 hover:bg-slate-700 rounded-r-lg transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium border border-orange-500/30">정책뉴스</span>
                    <span className="text-xs text-gray-400">2024-09-10</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1 hover:text-orange-400 transition-colors cursor-pointer">
                    바이오 투자 생태계 활성화 방안 논의
                  </h4>
                  <p className="text-gray-400 text-sm">
                    전북도와 주요 투자기관 간 협력을 강화하여 바이오 투자 생태계를 활성화하기 위한 방안을 모색했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">예정 행사</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">전체보기 →</button>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-slate-700 rounded-r-lg transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium border border-blue-500/30">컨퍼런스</span>
                    <span className="text-xs text-gray-400">2024.10.15</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1 hover:text-blue-400 transition-colors cursor-pointer">
                    Korea Bio Week 2024
                  </h4>
                  <p className="text-gray-400 text-sm">
                    전북 바이오 클러스터에서 열리는 연례 글로벌 바이오 컨퍼런스입니다.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-3 hover:bg-slate-700 rounded-r-lg transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium border border-orange-500/30">IR</span>
                    <span className="text-xs text-gray-400">2024.10.25</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1 hover:text-orange-400 transition-colors cursor-pointer">
                    JB Bio IR Day 2024
                  </h4>
                  <p className="text-gray-400 text-sm">
                    바이오 기업들의 투자 설명회 및 네트워킹 행사입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 창업보육센터 현황 */}
      <section className="py-12 lg:py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">창업보육센터 현황</h2>
            <p className="text-gray-400">전북 바이오 창업 생태계 허브</p>
              </div>

          {/* 보육센터 정보 - 그리드 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">보육센터 정보</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockIncubatorCenters.map((center) => (
                <div key={center.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{center.location[0]}</span>
            </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{center.name}</h4>
                      <p className="text-sm text-gray-400">{center.location}</p>
              </div>
            </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">규모:</span> {center.totalRooms}실
              </div>
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">운영:</span> {center.operator}
            </div>
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">연락처:</span> {center.contact}
          </div>
        </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                    문의하기
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 실시간 공실현황 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">실시간 공실현황</h3>
            <div className="grid gap-4">
              {mockIncubatorCenters.map((center) => {
                const vacancyRate = ((center.totalRooms - center.occupiedRooms) / center.totalRooms) * 100;
                const occupancyRate = (center.occupiedRooms / center.totalRooms) * 100;
                const hasVacancy = center.occupiedRooms < center.totalRooms;
                
                return (
                  <div key={center.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{center.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>전체실: {center.totalRooms}실</span>
                          <span>입주실: {center.occupiedRooms}실</span>
                          <span>공실: {center.totalRooms - center.occupiedRooms}실</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="flex-1 md:w-48">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">입주율</span>
                            <span className="text-sm font-medium text-white">{occupancyRate.toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${occupancyRate}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            hasVacancy 
                              ? 'bg-green-600/20 text-green-400 border-green-500/30' 
                              : 'bg-gray-600/20 text-gray-400 border-gray-500/30'
                          }`}>
                            {hasVacancy ? '입주 가능' : '대기 중'}
                          </span>
                        </div>
                      </div>
            </div>
            </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg text-lg">
              입주 신청하기
            </button>
          </div>
        </div>
      </section>

      {/* 기업정보 */}
      <section className="py-12 lg:py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">주요 기업</h2>
            <p className="text-gray-400">전북 바이오 생태계를 선도하는 주요 기업</p>
              </div>
          
          {/* 모바일: 수평 컴팩트 카드 */}
          <div className="md:hidden space-y-3">
            {mockCompanies.map((company) => {
              const getLogoColor = (logo: string) => {
                if (logo === 'C') return { from: 'from-blue-500', to: 'to-blue-600', border: 'border-blue-400', glow: 'hover:shadow-blue-500/10' };
                if (logo === 'J') return { from: 'from-purple-500', to: 'to-purple-600', border: 'border-purple-400', glow: 'hover:shadow-purple-500/10' };
                return { from: 'from-green-500', to: 'to-green-600', border: 'border-green-400', glow: 'hover:shadow-green-500/10' };
              };
              
              const getCategoryColor = (category: string) => {
                if (category === '바이오의약품') return { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'border-blue-500/30' };
                if (category === '진단기기') return { bg: 'bg-purple-600/20', text: 'text-purple-400', border: 'border-purple-500/30' };
                return { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-500/30' };
              };
              
              const getStageColor = (stage: string) => {
                if (stage === '상장기업') return { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-500/30' };
                if (stage === 'Series B') return { bg: 'bg-orange-600/20', text: 'text-orange-400', border: 'border-orange-500/30' };
                return { bg: 'bg-yellow-600/20', text: 'text-yellow-400', border: 'border-yellow-500/30' };
              };
              
              const logoColor = getLogoColor(company.logo);
              const categoryColor = getCategoryColor(company.category);
              const stageColor = getStageColor(company.stage);
              
              return (
                <div key={company.id} className={`bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-600 hover:shadow-lg ${logoColor.glow} transition-all duration-300`}>
                  <div className="flex items-start gap-4 p-4">
                    {/* 좌측: 로고 */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${logoColor.from} ${logoColor.to} rounded-xl flex items-center justify-center ${logoColor.border} border`}>
                        <span className="text-white text-base font-bold">{company.logo}</span>
              </div>
            </div>
                    
                    {/* 우측: 정보 */}
                    <div className="flex-1 min-w-0">
                      {/* 상단: 이름 */}
                      <h3 className="text-base font-semibold text-white mb-2">{company.name}</h3>
                      
                      {/* 설명 (1줄) */}
                      <p className="text-gray-400 text-sm mb-3" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {company.description}
                      </p>
                      
                      {/* 태그 */}
                      <div className="flex gap-1.5">
                        <span className={`${categoryColor.bg} ${categoryColor.text} px-2 py-0.5 rounded-md text-xs font-medium border ${categoryColor.border}`}>
                          {company.category}
                        </span>
                        <span className={`${stageColor.bg} ${stageColor.text} px-2 py-0.5 rounded-md text-xs font-medium border ${stageColor.border}`}>
                          {company.stage}
                        </span>
                      </div>
              </div>
              </div>
            </div>
              );
            })}
          </div>

          {/* 데스크톱: 세로 카드 (약간 압축) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {mockCompanies.map((company) => {
              const getLogoColor = (logo: string) => {
                if (logo === 'C') return { from: 'from-blue-500', to: 'to-blue-600', border: 'border-blue-400', glow: 'hover:shadow-blue-500/10' };
                if (logo === 'J') return { from: 'from-purple-500', to: 'to-purple-600', border: 'border-purple-400', glow: 'hover:shadow-purple-500/10' };
                return { from: 'from-green-500', to: 'to-green-600', border: 'border-green-400', glow: 'hover:shadow-green-500/10' };
              };
              
              const getCategoryColor = (category: string) => {
                if (category === '바이오의약품') return { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'border-blue-500/30' };
                if (category === '진단기기') return { bg: 'bg-purple-600/20', text: 'text-purple-400', border: 'border-purple-500/30' };
                return { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-500/30' };
              };
              
              const getStageColor = (stage: string) => {
                if (stage === '상장기업') return { bg: 'bg-green-600/20', text: 'text-green-400', border: 'border-green-500/30' };
                if (stage === 'Series B') return { bg: 'bg-orange-600/20', text: 'text-orange-400', border: 'border-orange-500/30' };
                return { bg: 'bg-yellow-600/20', text: 'text-yellow-400', border: 'border-yellow-500/30' };
              };
              
              const logoColor = getLogoColor(company.logo);
              const categoryColor = getCategoryColor(company.category);
              const stageColor = getStageColor(company.stage);
              
              return (
                <div key={company.id} className={`bg-slate-800 rounded-2xl p-6 text-center border border-slate-700 hover:border-slate-600 hover:shadow-lg ${logoColor.glow} transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${logoColor.from} ${logoColor.to} rounded-full mx-auto mb-4 flex items-center justify-center ${logoColor.border} border`}>
                    <span className="text-white text-lg font-bold">{company.logo}</span>
              </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{company.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {company.description}
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className={`${categoryColor.bg} ${categoryColor.text} px-3 py-1 rounded-full text-xs font-medium border ${categoryColor.border}`}>
                      {company.category}
                    </span>
                    <span className={`${stageColor.bg} ${stageColor.text} px-3 py-1 rounded-full text-xs font-medium border ${stageColor.border}`}>
                      {company.stage}
                    </span>
              </div>
            </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg">
              전체 기업 보기
            </button>
          </div>
        </div>
      </section>

      {/* 회원 혜택 섹션 */}
      <section className="bg-slate-950 py-16 px-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">회원 혜택</h2>
            <p className="text-gray-400">JB SQUARE 회원만의 특별한 혜택</p>
          </div>

          {/* 혜택 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* 우선 지원 알림 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">우선 지원 알림</h3>
                <p className="text-gray-400 text-sm">신규 지원사업 공고 우선 알림</p>
              </div>
            </div>

            {/* 맞춤형 정보 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">맞춤형 정보</h3>
                <p className="text-gray-400 text-sm">기업 유형별 맞춤 정보 제공</p>
              </div>
            </div>

            {/* 네트워킹 기회 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">네트워킹 기회</h3>
                <p className="text-gray-400 text-sm">바이오 커뮤니티 행사 초대</p>
              </div>
            </div>

            {/* 전문가 상담 */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">전문가 상담</h3>
                <p className="text-gray-400 text-sm">창업/투자 전문가 1:1 상담</p>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg">
              회원가입하고 혜택 받기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

