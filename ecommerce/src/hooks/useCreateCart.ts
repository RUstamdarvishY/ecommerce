import { useMutation } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";


export interface CartItems{
  id?: number
  product: number
  quantity: number
  total_price?: number
}


export interface Cart{
  id?: string;
  items?: CartItems[]
  total_price?: number
}

const apiClient = new ApiClient<Cart>("carts/");

const useCreateCart = () => {
  return useMutation({
    mutationFn: () => apiClient.post({}),


    onError: () => {
      return null;
    },

    cacheTime: 2000000
  });
};

export default useCreateCart;
