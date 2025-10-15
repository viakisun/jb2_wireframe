import { useState, useEffect } from 'react';
import { searchData, SearchResult } from '../store/mockupStore';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult>({
    announcements: [],
    news: [],
    events: [],
    companies: []
  });
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setResults({
        announcements: [],
        news: [],
        events: [],
        companies: []
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay for better UX
    const timeoutId = setTimeout(() => {
      const searchResults = searchData(query);
      setResults(searchResults);
      setIsSearching(false);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      setIsSearching(false);
    };
  }, [query]);

  return {
    query,
    setQuery,
    results,
    isSearching,
    hasResults: results.announcements.length > 0 || 
                results.news.length > 0 || 
                results.events.length > 0 || 
                results.companies.length > 0
  };
};
