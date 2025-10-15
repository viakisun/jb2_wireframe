import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<{[key: number]: boolean}>({});
  const [isScrolled, setIsScrolled] = useState(false);

  // 화면 크기 변경시 모바일 메뉴 닫기 및 스크롤 처리
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileSubMenuOpen({});
      }
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
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

  const toggleMobileSubMenu = (index: number) => {
    setMobileSubMenuOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200 py-3.5' 
          : 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-5'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className={`transition-all duration-300 ${
                isScrolled ? 'hover:scale-105' : 'hover:scale-105 drop-shadow-lg'
              }`}>
                <div className={`relative rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  isScrolled 
                    ? 'w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg' 
                    : 'w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg hover:from-blue-600 hover:to-cyan-700'
                }`}>
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-white/40"></div>
                  </div>
                  <span className="relative text-xl font-bold tracking-tight">JB²</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block flex-1 max-w-6xl mx-4">
              <nav className="flex justify-center">
                <div className="flex space-x-6 xl:space-x-8">
                  {menuItems.map((menu, index) => (
                    <div key={index} className="relative">
                      <div
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className={`px-4 xl:px-5 py-3.5 text-base font-semibold tracking-wide transition-all duration-300 rounded-lg whitespace-nowrap relative ${
                          isScrolled 
                            ? (activeDropdown === index 
                                ? 'text-blue-600 bg-blue-50' 
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50')
                            : (activeDropdown === index 
                                ? 'text-white bg-white/15' 
                                : 'text-white hover:text-white hover:bg-white/10 drop-shadow-sm')
                        } ${
                          activeDropdown === index && !isScrolled 
                            ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-400 after:rounded-full' 
                            : ''
                        } ${
                          activeDropdown === index && isScrolled 
                            ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' 
                            : ''
                        }`}>
                          {menu.title}
                        </button>
                        
                        {/* Enhanced Desktop Dropdown */}
                        <div
                          className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transition-all duration-300 ${
                            activeDropdown === index 
                              ? 'opacity-100 visible translate-y-0 scale-100' 
                              : 'opacity-0 invisible translate-y-2 scale-95'
                          }`}
                          onMouseEnter={() => setActiveDropdown(index)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2">
                            {menu.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="group flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-200"
                              >
                                <div className="w-2 h-2 bg-gray-300 group-hover:bg-white rounded-full transition-colors"></div>
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* User Avatar */}
              <div className="relative">
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 border border-gray-200' 
                    : 'bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm'
                }`}>
                  <svg className={`w-5 h-5 ${isScrolled ? 'text-gray-600' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-white hover:text-orange-300 hover:bg-white/10 drop-shadow-md'
                }`}
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  {mobileMenuOpen ? (
                    <div className="relative w-6 h-6">
                      <span className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                      <span className="absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <span className="block w-6 h-0.5 bg-current transition-all duration-200"></span>
                      <span className="block w-6 h-0.5 bg-current transition-all duration-200"></span>
                      <span className="block w-4 h-0.5 bg-current transition-all duration-200"></span>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200">
              <div className="px-4 py-6 space-y-2 max-h-96 overflow-y-auto">
                {menuItems.map((menu, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleMobileSubMenu(index)}
                      className="w-full flex justify-between items-center py-4 px-4 text-left text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                    >
                      <span className="font-medium group-hover:text-blue-600">{menu.title}</span>
                      <span className={`transform transition-transform duration-200 text-blue-500 ${mobileSubMenuOpen[index] ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    {mobileSubMenuOpen[index] && (
                      <div className="ml-4 space-y-1 animate-fade-in-up">
                        {menu.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center gap-3 py-3 px-4 text-sm text-gray-600 hover:bg-primary-blue hover:text-white rounded-lg transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                  {/* Mobile User Avatar */}
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    계정
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
