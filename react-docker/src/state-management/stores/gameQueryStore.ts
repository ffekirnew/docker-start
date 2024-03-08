import { create } from "zustand";
import { Ordering } from "../../shared/services/game-service";

export interface GameQuery {
  genreId?: number
  platformId?: number
  ordering?: Ordering
  searchQuery?: string
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setOrdering: (ordering: Ordering) => void;
  setSearchQuery: (query: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setGenreId: genreId => set(() => ({ gameQuery: { genreId } })),
  setPlatformId: platformId => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrdering: ordering => set(store => ({ gameQuery: { ...store.gameQuery, ordering } })),
  setSearchQuery: searchQuery => set(store => ({ gameQuery: { ...store.gameQuery, searchQuery } }))
}));

export default useGameQueryStore;
