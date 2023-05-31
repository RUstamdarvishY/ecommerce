import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import initialProducts from "../components/entities/InitialProducts";
import productQuery from "../components/entities/ProductQuery";

export interface Products{
  id: number
  title: string
  description: string
  unit_price: number
  inventory: number
  image: string
  collectionId: number 
}

const apiClient = new ApiClient<Products>("products/");

const useProducts = () => {
  return useQuery<Products[], Error>({
    queryKey: ["products"],
    queryFn: apiClient.getAll,
    cacheTime: ms('2h'),
    staleTime: ms("1d"),
    initialData: initialProducts,
  });
};

export default useProducts;
