'use client';
import { Spinner } from '@/jiga/ui-kit';
import { useNews } from '../hooks/useNews';
import { NewsList } from './NewsList';

export const News = () => {
  const { news, loading } = useNews();

  if (loading) {
    return <Spinner />;
  }

  return <NewsList news={news} />;
};
