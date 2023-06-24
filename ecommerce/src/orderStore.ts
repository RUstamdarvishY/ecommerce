import { create } from "zustand";

interface OrderedItems {
  orderItems: number[];
  setAddProductToCart: (id: number) => void;
  setDeleteProductFromCart: (id: number) => void;
}

const useOrderStore = create<OrderedItems>((set) => ({
  orderItems: [],
  setAddProductToCart: (id) =>
    set((store) => ({ orderItems: { ...store.orderItems, id } })),
  setDeleteProductFromCart: (id) =>
    set((store) => ({ orderItems: { ...store.orderItems, id } })),
}));

export default useOrderStore;
