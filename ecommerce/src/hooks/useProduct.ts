import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import useProductQueryStore from "../productStore";
import { Products } from "./useProducts";


const apiClient = new ApiClient<Products>("products/");

const useProducts = (productId: number) => {
  const productQuery = useProductQueryStore((s) => s.ProductQuery);

  return useQuery<Products, Error>({
    queryKey: ["products", productId],
    queryFn: () => apiClient.get(productId),
    cacheTime: ms("2h"),
    staleTime: ms("1d"),
  });
};

export default useProducts;
