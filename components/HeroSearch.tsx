import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { mockAnnouncements, mockNews, mockEvents, mockCompanies } from '../store/mockupStore';

const HeroSearch = () => {
  const { query, setQuery, results, isSearching, hasResults } = useSearch();
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  const handleInputFocus = () => {
    if (query.trim() !== '') {
      setShowResults(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding results to allow clicks on results
    setTimeout(() => setShowResults(false), 200);
  };

  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="공고, 뉴스, 기업 정보를 검색하세요..."
          className="w-full px-6 py-4 pl-14 pr-14 text-lg text-gray-900 bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500 shadow-lg"
        />
        
        {/* Search Icon */}
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Loading/Clear Button */}
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
          {isSearching ? (
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          ) : query ? (
            <button
              onClick={clearSearch}
              className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      {/* Search Results */}
      {showResults && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[500px] overflow-hidden z-50">
          {hasResults ? (
            <div className="max-h-[500px] overflow-y-auto">
              {/* Announcements */}
              {results.announcements.length > 0 && (
                <div className="border-b border-gray-100 last:border-b-0">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      지원사업 공고
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                        {results.announcements.length}
                      </span>
                    </h4>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {results.announcements.slice(0, 4).map((item) => (
                      <div key={item.id} className="px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                item.category === '창업지원' ? 'bg-orange-100 text-orange-700' :
                                item.category === 'R&D지원' ? 'bg-blue-100 text-blue-700' :
                                item.category === '인큐베이팅' ? 'bg-purple-100 text-purple-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {item.category}
                              </span>
                              <span className="text-xs text-gray-500 font-medium">{item.amount}</span>
                            </div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed" style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {results.news.length > 0 && (
                <div className="border-b border-gray-100 last:border-b-0">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      뉴스
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                        {results.news.length}
                      </span>
                    </h4>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {results.news.slice(0, 4).map((item) => (
                      <div key={item.id} className="px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
                                {item.category}
                              </span>
                              <span className="text-xs text-gray-500">{item.date}</span>
                            </div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors" style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>{item.title}</h5>
                          </div>
                          <div className="flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {results.events.length > 0 && (
                <div className="border-b border-gray-100 last:border-b-0">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      행사
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">
                        {results.events.length}
                      </span>
                    </h4>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {results.events.slice(0, 4).map((item) => (
                      <div key={item.id} className="px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">
                                {item.category}
                              </span>
                              <span className="text-xs text-gray-500">{item.date}</span>
                            </div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-xs text-gray-600" style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {item.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Companies */}
              {results.companies.length > 0 && (
                <div className="border-b border-gray-100 last:border-b-0">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      기업
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                        {results.companies.length}
                      </span>
                    </h4>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {results.companies.slice(0, 4).map((item) => (
                      <div key={item.id} className="px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{item.logo}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">
                                  {item.stage}
                                </span>
                                <span className="text-xs text-gray-500">{item.category}</span>
                              </div>
                              <h5 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {item.name}
                              </h5>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-sm">검색 결과가 없습니다</p>
              <p className="text-xs text-gray-400 mt-1">다른 키워드로 검색해보세요</p>
            </div>
          )}
        </div>
      )}

      {/* Popular Search Terms */}
      {showResults && query.trim() === '' && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
          <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            인기 검색어
          </h4>
          <div className="flex flex-wrap gap-2">
            {['바이오 창업', 'R&D 지원', '투자 유치', '기술이전', '인큐베이팅', '바이오 클러스터'].map((term, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(term);
                  setShowResults(true);
                }}
                className="px-4 py-2 text-sm bg-gray-50 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-gray-200 hover:border-blue-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
