import { create } from "zustand";
import { ProductQuery } from "./services/ApiClient";

interface productQueryStore {
  ProductQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setCategoryId: (categoryId: number) => void;
  setProductId: (productId: number) => void;
  setPriceRange: (priceRange: number[]) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useProductQueryStore = create<productQueryStore>((set) => ({
  ProductQuery: {},
  setSearchText: (searchText) => set(() => ({ ProductQuery: { searchText } })),
  setCategoryId: (categoryId) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, categoryId } })),
  setProductId: (productId) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, productId } })),
  setPriceRange: (priceRange) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, priceRange } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ ProductQuery: { ...store.ProductQuery, sortOrder } })),
}));

export default useProductQueryStore;
