import { useMemo } from 'react';
import { NewsItem } from '../api/news.types';
import sanitizeHtml from 'sanitize-html';
import styles from './NewsListItem.module.css';

export const NewsListItem = ({ newsItem }: { newsItem: NewsItem }) => {
  const sanitizedDescription = useMemo(
    () => sanitizeHtml(newsItem.description),
    [newsItem.description],
  );
  return (
    <div className={styles.container}>
      <h2>{newsItem.title}</h2>
      <div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        ></div>
      </div>
      <a href={newsItem.link}>Read more</a>
    </div>
  );
};
