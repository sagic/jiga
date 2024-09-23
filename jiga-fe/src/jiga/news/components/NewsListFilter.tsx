// import { useNewsFilterStore } from '../stores/news-filter.store';

export const NewsListFilter = () => {
  // const [filter, setFilter] = useNewsFilterStore((state) => [
  //   state.filter,
  //   state.setFilter,
  // ]);
  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        // value={filter.country}
        // onChange={(e) => setFilter({ country: e.target.value })}
        placeholder="Country"
      />
      <input
        type="text"
        // value={filter.topic}
        // onChange={(e) => setFilter({ topic: e.target.value })}
        placeholder="Topic"
      />
    </div>
  );
};
