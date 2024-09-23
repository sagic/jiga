import axios from 'axios';
import { NewsItem } from './news.types';
import { NewsFilter } from '../stores/news-filter.store';

const API_SERVER_URL = 'http://localhost:3001';

export const fetchGoogleNewsRSS = async (
  filter?: Partial<NewsFilter>,
): Promise<NewsItem[]> => {
  try {
    const response = await axios.request<NewsItem[]>({
      method: 'GET',
      url: `${API_SERVER_URL}/news`,
      params: filter,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news from Google News RSS');
  }
};
