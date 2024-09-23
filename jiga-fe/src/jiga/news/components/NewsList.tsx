import { NewsItem } from '../api/news.types';
import { NewsListFilter } from './NewsListFilter';
import { NewsListItem } from './NewsListItem';

export const NewsList = ({ news }: { news: NewsItem[] }) => {
  return (
    <div>
      <NewsListFilter />
      {news.map((item) => (
        <NewsListItem key={item.link} newsItem={item} />
      ))}
    </div>
  );
};
