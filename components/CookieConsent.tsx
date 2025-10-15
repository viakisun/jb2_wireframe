import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('consent');
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,      // 항상 활성화
    preferences: true,
    statistics: true,
    marketing: true
  });

  useEffect(() => {
    // 새로고침할 때마다 쿠키 배너 표시
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookieSettings));
    setIsVisible(false);
  };

  const toggleCookieSetting = (type: keyof typeof cookieSettings) => {
    if (type === 'necessary') return; // 필수 쿠키는 변경 불가
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-4">
            {/* 로고 */}
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">JB</span>
            </div>
            
            {/* 탭 메뉴 */}
            <div className="flex space-x-3 sm:space-x-6">
              <button
                onClick={() => setActiveTab('consent')}
                className={`pb-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'consent' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                동의
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'details' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                세부사항
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`pb-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'about' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                정보
              </button>
            </div>
          </div>
          
          <div className="hidden sm:block text-xs text-gray-500">
            Cookiebot by Usercentrics
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'consent' && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                JB SQUARE 웹사이트는 쿠키를 사용합니다
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                콘텐츠를 개인화하고, 소셜 미디어 기능을 제공하며, 트래픽을 분석하기 위해 쿠키를 사용합니다. 
                또한 사이트 사용에 대한 정보를 소셜 미디어 및 분석 파트너와 공유할 수 있으며, 
                이들이 제공한 정보나 서비스 사용으로 수집한 다른 정보와 결합할 수 있습니다.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {/* 필수 쿠키 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg gap-3 sm:gap-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">필수</h4>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">24</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      필수 쿠키는 페이지 탐색 및 보안 영역 접근과 같은 기본 기능을 활성화하여 웹사이트를 사용 가능하게 만듭니다. 
                      이 쿠키 없이는 웹사이트가 제대로 작동할 수 없습니다.
                    </p>
                  </div>
                  <div className="sm:ml-4 flex justify-end sm:justify-start">
                    <div className="w-12 h-6 bg-gray-400 rounded-full relative cursor-not-allowed">
                      <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 설정 쿠키 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg gap-3 sm:gap-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">설정</h4>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">1</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      설정 쿠키를 통해 웹사이트는 선호하는 언어나 지역과 같은 정보를 기억하여 
                      웹사이트의 동작이나 외관을 변경할 수 있습니다.
                    </p>
                  </div>
                  <div className="sm:ml-4 flex justify-end sm:justify-start">
                    <button
                      onClick={() => toggleCookieSetting('preferences')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        cookieSettings.preferences ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        cookieSettings.preferences ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* 통계 쿠키 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg gap-3 sm:gap-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">통계</h4>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">4</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      통계 쿠키는 웹사이트 소유자가 방문자가 웹사이트와 어떻게 상호 작용하는지 
                      이해할 수 있도록 익명으로 정보를 수집하고 보고하는 데 도움이 됩니다.
                    </p>
                  </div>
                  <div className="sm:ml-4 flex justify-end sm:justify-start">
                    <button
                      onClick={() => toggleCookieSetting('statistics')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        cookieSettings.statistics ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        cookieSettings.statistics ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* 마케팅 쿠키 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg gap-3 sm:gap-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">마케팅</h4>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">2</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      마케팅 쿠키는 방문자가 여러 웹사이트에서 따라다니는 데 사용됩니다. 
                      목적은 관련성 있고 참여도가 높은 개인 맞춤형 광고를 표시하는 것입니다.
                    </p>
                  </div>
                  <div className="sm:ml-4 flex justify-end sm:justify-start">
                    <button
                      onClick={() => toggleCookieSetting('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        cookieSettings.marketing ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        cookieSettings.marketing ? 'translate-x-6' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">쿠키 세부사항</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">세션 쿠키</h4>
                  <p className="text-xs sm:text-sm text-gray-600">사용자 세션을 유지하는 데 필요한 쿠키입니다.</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">영구 쿠키</h4>
                  <p className="text-xs sm:text-sm text-gray-600">사용자 설정을 기억하는 영구 저장 쿠키입니다.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">쿠키 정보</h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                <p>
                  쿠키는 사용자 경험을 더 효율적으로 만들기 위해 웹사이트에서 사용할 수 있는 작은 텍스트 파일입니다.
                </p>
                <p>
                  이 사이트가 제대로 작동하려면 엄격히 필요한 쿠키를 귀하의 장치에 저장할 수 있다고 법률에서 규정하고 있습니다. 
                  다른 유형의 쿠키는 귀하의 허락이 필요합니다.
                </p>
                <p>
                  이 사이트는 다양한 유형의 쿠키를 사용합니다. 일부 쿠키는 당사 페이지에 나타나는 제3자 서비스에서 배치합니다.
                </p>
                <p>
                  언제든지 웹사이트의 쿠키 선언에서 동의를 변경하거나 철회할 수 있습니다.
                </p>
                <p>
                  개인정보처리방침에서 우리가 누구인지, 어떻게 연락할 수 있는지, 어떻게 개인 데이터를 처리하는지에 대해 자세히 알아보세요.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 sm:p-6 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
