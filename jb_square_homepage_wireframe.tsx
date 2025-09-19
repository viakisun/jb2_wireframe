import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

  // 화면 크기 변경시 모바일 메뉴 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileSubMenuOpen({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      title: 'JB BIO 클러스터',
      subItems: [
        { name: '바이오 클러스터', href: '/bio-cluster/cluster' },
        { name: '지역 바이오밸리', href: '/bio-cluster/valley' },
        { name: 'CEO포럼', href: '/bio-cluster/community/ceo-forum' },
        { name: '전북경제포럼', href: '/bio-cluster/community/economic-forum' },
        { name: '혁신신약살롱', href: '/bio-cluster/community/pharma-salon' },
        { name: '전북과학기술포럼', href: '/bio-cluster/community/tech-forum' }
      ]
    },
    {
      title: '지원기관',
      subItems: [
        { name: '유관기관', href: '/organizations/related' },
        { name: '대학', href: '/organizations/academic' },
        { name: '연구소', href: '/organizations/research' }
      ]
    },
    {
      title: '바이오지원정책',
      subItems: [
        { name: '외국인투자제도', href: '/policy/investment/foreign' },
        { name: '투자 절차', href: '/policy/investment/process' },
        { name: 'JBFEZ', href: '/policy/investment/jbfez' },
        { name: '세제감면', href: '/policy/incentives/tax' },
        { name: '경영활동지원', href: '/policy/incentives/business-support' },
        { name: '투자상품', href: '/policy/products' },
        { name: '투자가이드', href: '/policy/guide' }
      ]
    },
    {
      title: '지원사업공고',
      subItems: [
        { name: '정부/지자체', href: '/announcements/government' },
        { name: '기업 맞춤형 지원', href: '/announcements/customized' },
        { name: 'R&D', href: '/announcements/rd' },
        { name: '창업 및 기술이전', href: '/announcements/startup' },
        { name: '최신공고 모아보기', href: '/announcements/all' }
      ]
    },
    {
      title: '창업보육센터',
      subItems: [
        { name: '지역별 입주기업', href: '/incubator/regional' },
        { name: '공실현황', href: '/incubator/vacancy' },
        { name: '입주 절차', href: '/incubator/application/process' },
        { name: '입주 신청', href: '/incubator/application/apply' }
      ]
    },
    {
      title: '뉴스/행사',
      subItems: [
        { name: '최신뉴스', href: '/news-events/news' },
        { name: '바이오행사', href: '/news-events/events' }
      ]
    },
    {
      title: '기업정보',
      subItems: [
        { name: '지역 기업 정보', href: '/companies/directory' },
        { name: '인터뷰 및 기획 기사', href: '/companies/interviews' }
      ]
    }
  ];

  const toggleMobileSubMenu = (index) => {
    setMobileSubMenuOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-2 border-gray-400 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-4">
            {/* Logo */}
            <div className="border-2 border-gray-400 px-4 py-2 bg-gray-100">
              <div className="text-xl font-bold">[LOGO] JB SQUARE</div>
            </div>

            {/* Desktop Navigation - Always visible on large screens */}
            <div className="hidden lg:block flex-1 max-w-4xl mx-8">
              <div className="flex justify-center">
                <div className="flex space-x-1 border border-gray-400 p-1 bg-gray-50">
                  {menuItems.map((menu, index) => (
                    <div
                      key={index}
                      className="relative"
                    >
                      <div
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="border border-gray-300 px-3 py-2 bg-white hover:bg-gray-100 text-sm font-medium whitespace-nowrap">
                          [MENU] {menu.title}
                        </button>
                        
                        {/* Desktop Dropdown - Always rendered, visibility controlled by CSS */}
                        <div
                          className="absolute top-full left-0 mt-1 w-64 bg-white border-2 border-gray-400 z-50"
                          style={{
                            display: activeDropdown === index ? 'block' : 'none'
                          }}
                        >
                          {menu.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm border-b border-gray-300 last:border-b-0 hover:bg-gray-100"
                            >
                              [SUBMENU] {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <div className="hidden xl:block border border-gray-300 px-3 py-2 bg-white text-sm">
                [BTN] 검색
              </div>
              <div className="hidden md:block border border-gray-300 px-3 py-2 bg-white text-sm">
                [BTN] KR | EN
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden border-2 border-gray-400 p-2 bg-white"
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  {mobileMenuOpen ? (
                    <div className="relative">
                      <span className="absolute w-5 h-0.5 bg-gray-700 transform rotate-45"></span>
                      <span className="absolute w-5 h-0.5 bg-gray-700 transform -rotate-45"></span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <span className="block w-6 h-0.5 bg-gray-700"></span>
                      <span className="block w-6 h-0.5 bg-gray-700"></span>
                      <span className="block w-6 h-0.5 bg-gray-700"></span>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t-2 border-gray-400 bg-white">
              <div className="px-4 py-4">
                {menuItems.map((menu, index) => (
                  <div key={index} className="border-b border-gray-300 last:border-b-0">
                    <button
                      onClick={() => toggleMobileSubMenu(index)}
                      className="w-full flex justify-between items-center py-3 text-left border border-gray-300 px-3 bg-gray-50 hover:bg-gray-100"
                    >
                      <span>[MENU] {menu.title}</span>
                      <span className={`transform transition-transform ${mobileSubMenuOpen[index] ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {mobileSubMenuOpen[index] && (
                      <div className="mt-1 border-l-2 border-gray-400 bg-white">
                        {menu.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2 px-4 ml-4 text-sm border border-gray-300 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            [SUBMENU] {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-4 mt-4 border-t border-gray-400 space-y-2">
                  <div className="border border-gray-300 px-3 py-2 bg-gray-50">[BTN] 🔍 검색</div>
                  <div className="border border-gray-300 px-3 py-2 bg-gray-50">[BTN] 🌐 언어 변경</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 border-2 border-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-gray-500 p-8 bg-gray-100">
            <h1 className="text-5xl font-bold mb-6 text-gray-800">[HERO TITLE]</h1>
            <h2 className="text-2xl mb-4 text-gray-700">Next 전북, Best TP</h2>
            <p className="text-xl mb-8 text-gray-600">전북산업 대전환과 기업 고도성장을 선도하는</p>
            <div className="border-2 border-gray-400 bg-white px-8 py-4 inline-block">
              [CTA BUTTON] JB SQUARE 시작하기
            </div>
          </div>
        </div>
      </section>

      {/* JB BIO 클러스터 소개 */}
      <section className="py-16 bg-white border-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-gray-300 pb-4">
            [SECTION] JB BIO 클러스터
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-300 p-6 bg-gray-50">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">ICON</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">[CARD 1] 바이오 클러스터</h3>
              <div className="text-gray-600 border border-gray-300 p-2 text-sm">
                [DESCRIPTION]<br/>150만㎡ 규모의 바이오 클러스터와<br/>주요 시설 안내
              </div>
            </div>
            <div className="border-2 border-gray-300 p-6 bg-gray-50">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">ICON</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">[CARD 2] 지역 바이오밸리</h3>
              <div className="text-gray-600 border border-gray-300 p-2 text-sm">
                [DESCRIPTION]<br/>전북 각 지역의<br/>바이오 산업단지 현황
              </div>
            </div>
            <div className="border-2 border-gray-300 p-6 bg-gray-50">
              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">ICON</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">[CARD 3] 커뮤니티</h3>
              <div className="text-gray-600 border border-gray-300 p-2 text-sm">
                [DESCRIPTION]<br/>CEO포럼, 경제포럼,<br/>혁신신약살롱 등
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 지원사업 공고 */}
      <section className="py-16 bg-gray-100 border-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-gray-300 pb-4">
            [SECTION] 지원사업 공고
          </h2>
          <div className="bg-white border-2 border-gray-400 p-6">
            <div className="flex justify-between items-center mb-6 border-b-2 border-gray-300 pb-4">
              <h3 className="text-xl font-semibold text-gray-800">[SUBSECTION] 최신 공고</h3>
              <div className="border border-gray-400 px-4 py-2 text-gray-600">[LINK] 전체 보기 →</div>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-gray-300 p-4 bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 text-sm font-medium inline-block mb-2">
                      [TAG] 창업지원
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">[TITLE] 2024 바이오기업 성장지원사업</h4>
                    <div className="text-gray-600 text-sm border border-gray-300 p-2">
                      [DESCRIPTION] 전북 소재 바이오기업 대상 80억원 규모
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 flex-shrink-0 ml-4 border border-gray-300 p-2">
                    <div className="mb-1">[DATE] 마감: 2024-10-31</div>
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 font-semibold">[STATUS] 모집중</div>
                  </div>
                </div>
              </div>
              
              <div className="border-2 border-gray-300 p-4 bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 text-sm font-medium inline-block mb-2">
                      [TAG] R&D
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">[TITLE] 바이오 스타트업 인큐베이팅</h4>
                    <div className="text-gray-600 text-sm border border-gray-300 p-2">
                      [DESCRIPTION] 창업 초기 기업 대상 30억원 규모
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 flex-shrink-0 ml-4 border border-gray-300 p-2">
                    <div className="mb-1">[DATE] 마감: 2024-11-15</div>
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 font-semibold">[STATUS] 심사중</div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-300 p-4 bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 text-sm font-medium inline-block mb-2">
                      [TAG] 투자연계
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">[TITLE] 글로벌 바이오펀드 협력 프로그램</h4>
                    <div className="text-gray-600 text-sm border border-gray-300 p-2">
                      [DESCRIPTION] 해외 전략적 투자자 연계 500억원
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 flex-shrink-0 ml-4 border border-gray-300 p-2">
                    <div className="mb-1">[DATE] 마감: 2024-12-01</div>
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 font-semibold">[STATUS] 예정</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 창업보육센터 현황 */}
      <section className="py-16 bg-white border-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-gray-300 pb-4">
            [SECTION] 창업보육센터 현황
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center border-2 border-gray-400 p-6 bg-gray-50">
              <div className="text-4xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-2">[NUMBER] 34</div>
              <div className="text-gray-600 font-medium">[LABEL] 입주기업</div>
            </div>
            <div className="text-center border-2 border-gray-400 p-6 bg-gray-50">
              <div className="text-4xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-2">[NUMBER] 28</div>
              <div className="text-gray-600 font-medium">[LABEL] 졸업기업</div>
            </div>
            <div className="text-center border-2 border-gray-400 p-6 bg-gray-50">
              <div className="text-4xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-2">[NUMBER] 82%</div>
              <div className="text-gray-600 font-medium">[LABEL] 성공률</div>
            </div>
            <div className="text-center border-2 border-gray-400 p-6 bg-gray-50">
              <div className="text-4xl font-bold text-gray-800 mb-2 border-b border-gray-300 pb-2">[NUMBER] 450억</div>
              <div className="text-gray-600 font-medium">[LABEL] 총 투자유치</div>
            </div>
          </div>
          <div className="text-center">
            <div className="border-2 border-gray-400 bg-white px-8 py-3 inline-block">
              [CTA BUTTON] 입주 신청하기
            </div>
          </div>
        </div>
      </section>

      {/* 바이오뉴스 & 행사 */}
      <section className="py-16 bg-gray-100 border-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-gray-300 pb-4">
            [SECTION] 바이오뉴스 & 행사
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 뉴스 */}
            <div className="bg-white border-2 border-gray-400 p-6">
              <div className="flex justify-between items-center mb-6 border-b-2 border-gray-300 pb-4">
                <h3 className="text-xl font-semibold text-gray-800">[SUBSECTION] 최신 뉴스</h3>
                <div className="border border-gray-400 px-4 py-2 text-gray-600">[LINK] 더보기 →</div>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-gray-300 p-4 bg-gray-50">
                  <h4 className="font-medium mb-2 text-gray-800">[TITLE] 전북 바이오 클러스터, 글로벌 바이오 허브로 도약</h4>
                  <div className="text-gray-600 text-sm mb-2 border border-gray-300 p-2">
                    [DESCRIPTION] 세계적인 바이오 기업들의 투자 러시가 이어지며...
                  </div>
                  <div className="text-xs text-gray-400 border-t border-gray-300 pt-2">[DATE] 2024-09-15</div>
                </div>
                <div className="border-2 border-gray-300 p-4 bg-gray-50">
                  <h4 className="font-medium mb-2 text-gray-800">[TITLE] JB SQUARE 입주기업 3곳, 임상 승인 획득</h4>
                  <div className="text-gray-600 text-sm mb-2 border border-gray-300 p-2">
                    [DESCRIPTION] 혁신적인 바이오의약품 개발로 주목받는...
                  </div>
                  <div className="text-xs text-gray-400 border-t border-gray-300 pt-2">[DATE] 2024-09-12</div>
                </div>
                <div className="border-2 border-gray-300 p-4 bg-gray-50">
                  <h4 className="font-medium mb-2 text-gray-800">[TITLE] 바이오 투자 생태계 활성화 방안 논의</h4>
                  <div className="text-gray-600 text-sm mb-2 border border-gray-300 p-2">
                    [DESCRIPTION] 전북도와 주요 투자기관 간 협력 강화...
                  </div>
                  <div className="text-xs text-gray-400 border-t border-gray-300 pt-2">[DATE] 2024-09-10</div>
                </div>
              </div>
            </div>

            {/* 행사 */}
            <div className="bg-white border-2 border-gray-400 p-6">
              <div className="flex justify-between items-center mb-6 border-b-2 border-gray-300 pb-4">
                <h3 className="text-xl font-semibold text-gray-800">[SUBSECTION] 예정 행사</h3>
                <div className="border border-gray-400 px-4 py-2 text-gray-600">[LINK] 더보기 →</div>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-gray-300 p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800">[TITLE] Korea Bio Week 2024</h4>
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 text-xs font-medium">[TAG] 컨퍼런스</div>
                  </div>
                  <div className="text-gray-600 text-sm mb-2 border border-gray-300 p-2">
                    [LOCATION] 전북 바이오 클러스터
                  </div>
                  <div className="text-sm text-gray-500 border-t border-gray-300 pt-2">
                    [INFO] 2024-10-15 | 참가자 500명
                  </div>
                </div>
                <div className="border-2 border-gray-300 p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800">[TITLE] JB Bio IR Day 2024</h4>
                    <div className="border border-gray-400 bg-gray-200 px-2 py-1 text-xs font-medium">[TAG] IR</div>
                  </div>
                  <div className="text-gray-600 text-sm mb-2 border border-gray-300 p-2">
                    [LOCATION] 전북 바이오 클러스터
                  </div>
                  <div className="text-sm text-gray-500 border-t border-gray-300 pt-2">
                    [INFO] 2024-10-25 | 투자자 25명
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JB 기업정보 */}
      <section className="py-16 bg-white border-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-gray-300 pb-4">
            [SECTION] JB 기업정보
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">LOGO</div>
              <h3 className="font-semibold mb-2 text-gray-800">[COMPANY] 셀트리온</h3>
              <div className="text-sm text-gray-600 mb-3 border border-gray-300 p-2">
                [DESCRIPTION] 글로벌 바이오시밀러 선도기업
              </div>
              <div className="flex justify-between text-xs">
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[FIELD] 바이오의약품</div>
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[STAGE] 상장기업</div>
              </div>
            </div>
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">LOGO</div>
              <h3 className="font-semibold mb-2 text-gray-800">[COMPANY] 진바이오텍</h3>
              <div className="text-sm text-gray-600 mb-3 border border-gray-300 p-2">
                [DESCRIPTION] AI 기반 분자진단 솔루션
              </div>
              <div className="flex justify-between text-xs">
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[FIELD] 진단기기</div>
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[STAGE] Series B</div>
              </div>
            </div>
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 mb-4 flex items-center justify-center text-xs">LOGO</div>
              <h3 className="font-semibold mb-2 text-gray-800">[COMPANY] 바이오젠텍</h3>
              <div className="text-sm text-gray-600 mb-3 border border-gray-300 p-2">
                [DESCRIPTION] 차세대 바이오의약품 개발
              </div>
              <div className="flex justify-between text-xs">
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[FIELD] 바이오의약품</div>
                <div className="border border-gray-400 bg-gray-200 px-2 py-1">[STAGE] Series A</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="border-2 border-gray-400 bg-white px-8 py-3 inline-block">
              [LINK BUTTON] 전체 기업 보기
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 border-2 border-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-2 border-dashed border-gray-500 p-6 bg-gray-200">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="border border-gray-400 p-4 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">[BRAND] JB SQUARE</h3>
                <div className="text-gray-600 text-sm leading-relaxed border border-gray-300 p-2">
                  [DESCRIPTION] 전북산업 대전환과 기업 고도성장을 선도하는 Next 전북, Best TP
                </div>
              </div>
              <div className="border border-gray-400 p-4 bg-white">
                <h4 className="font-semibold mb-3 text-gray-800">[MENU] 바이오 클러스터</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="border-b border-gray-300 pb-1">[LINK] 바이오 클러스터</li>
                  <li className="border-b border-gray-300 pb-1">[LINK] 지역 바이오밸리</li>
                  <li className="border-b border-gray-300 pb-1">[LINK] 커뮤니티</li>
                </ul>
              </div>
              <div className="border border-gray-400 p-4 bg-white">
                <h4 className="font-semibold mb-3 text-gray-800">[MENU] 지원사업</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="border-b border-gray-300 pb-1">[LINK] 정부/지자체</li>
                  <li className="border-b border-gray-300 pb-1">[LINK] 맞춤형 지원</li>
                  <li className="border-b border-gray-300 pb-1">[LINK] R&D</li>
                </ul>
              </div>
              <div className="border border-gray-400 p-4 bg-white">
                <h4 className="font-semibold mb-3 text-gray-800">[CONTACT] 문의</h4>
                <div className="text-gray-600 text-sm space-y-1 border border-gray-300 p-2">
                  <div>[TEL] 전화: 063-XXX-XXXX</div>
                  <div>[EMAIL] 이메일: info@jbsquare.or.kr</div>
                  <div>[ADDRESS] 주소: 전북 전주시</div>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-400 mt-8 pt-8 text-center">
              <div className="border border-gray-400 bg-white p-2 text-gray-600 text-sm">
                [COPYRIGHT] &copy; 2024 JB SQUARE. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;