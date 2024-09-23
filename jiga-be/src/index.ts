import * as express from 'express';
import { fetchGoogleNewsRSS } from './google-news';
import * as cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const query = req.query;
    const topic = typeof query.topic === 'string' ? query.topic : undefined;
    const country =
      typeof query.country === 'string' ? query.country : undefined;
    const articles = await fetchGoogleNewsRSS({ topic, country });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
