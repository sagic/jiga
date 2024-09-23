import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const GOOGLE_NEWS_RSS_URL = 'https://news.google.com/rss';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface NewsFilter {
  country: string;
  topic: string;
}

export const fetchGoogleNewsRSS = async (
  filter?: Partial<NewsFilter>,
): Promise<NewsItem[]> => {
  try {
    // Research how google's rss works with topics and countries.
    // It looks like the topic and country are passed as a uuid parameter in the path.
    const response = await axios.get(GOOGLE_NEWS_RSS_URL, {
      params: { hl: 'en-US', gl: 'US', ceid: 'US:en', ...filter },
    });
    const rssData = await parseStringPromise(response.data);

    console.log(rssData.rss.channel[0].item[0]);

    const newsItems = rssData.rss.channel[0].item.map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
    }));

    return newsItems;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news from Google News RSS');
  }
};
