import { create } from 'zustand';

export interface NewsFilter {
  country: string;
  topic: string;
}

interface NewsFilterStore {
  filter: Partial<NewsFilter>;

  // ===

  setFilter: (filter: Partial<NewsFilter>) => void;
  clearFilter: () => void;
}

export const useNewsFilterStore = create<NewsFilterStore>((set) => ({
  filter: {},

  // ===

  setFilter: (filter) => set({ filter }),
  clearFilter: () => set({ filter: {} }),
}));
