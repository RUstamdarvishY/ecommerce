import { create } from "zustand";
import productQuery from "./components/entities/ProductQuery";


interface productQueryStore {
  ProductQuery: productQuery;
  setSearchText: (searchText: string) => void;
  setCategoryId: (genreId: number) => void;
  setPriceRange: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useProductQueryStore = create<productQueryStore>((set) => ({
  ProductQuery: {},
  setSearchText: (searchText) => set(() => ({ ProductQuery: { searchText } })),
  setCategoryId: (genreId) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, genreId } })),
  setPriceRange: (platformId) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, sortOrder } })),
}));

export default useProductQueryStore;