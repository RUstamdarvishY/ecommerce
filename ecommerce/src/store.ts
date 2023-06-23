import { create } from "zustand";
import { ProductQuery } from "./services/ApiClient";


interface productQueryStore {
  ProductQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setCategoryId: (genreId: number) => void;
  setPriceRange: (platformId: number[]) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useProductQueryStore = create<productQueryStore>((set) => ({
  ProductQuery: {},
  setSearchText: (searchText) => set(() => ({ ProductQuery: { searchText } })),
  setCategoryId: (categoryId) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, categoryId } })),
  setPriceRange: (priceRange) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, priceRange } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, sortOrder } })),
}));

export default useProductQueryStore;