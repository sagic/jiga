import { News } from '@/jiga/news';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <News />
    </div>
  );
}
