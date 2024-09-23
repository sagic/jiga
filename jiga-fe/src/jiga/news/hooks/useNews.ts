import { useCallback, useEffect, useState } from 'react';
import { NewsItem } from '../api/news.types';
import { fetchGoogleNewsRSS } from '../api/news.api';
import { NewsFilter } from '../stores/news-filter.store';

export const useNews = (filter?: Partial<NewsFilter>) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const sync = useCallback(async () => {
    setLoading(true);
    try {
      const news = await fetchGoogleNewsRSS(filter);
      setNews(news);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    sync();
  }, [sync]);

  return { news, loading, reload: sync };
};
