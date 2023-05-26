import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import Products from "../components/entities/Products";
import initialProducts from "../components/entities/InitialProducts";
import productQuery from "../components/entities/ProductQuery";

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
