import { useMutation } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import useCreateCart, { CartItems } from "./useCreateCart";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";



const useCreateCartItem = () => {
  const queryClient = useQueryClient()


  const cartId = queryClient.getQueryData(['cart']) 
  

  // if (cartId === undefined) {
  //   const {data} = useCreateCart()
  //   cartId = data?.id
  // }

  console.log(cartId)

  const apiClient = new ApiClient<CartItems>("carts/" + {cartId} + '/items/');
  
  return useMutation({
    mutationFn: (productId: number, quantity = 1) =>
      apiClient.post({ product: productId, quantity: quantity }),

    onSuccess: (savedItem, newItem) => {queryClient.invalidateQueries(
        {queryKey: ['cartItems']})},

    onError: () => {
      return null;
    },
  });
};

export default useCreateCartItem;
