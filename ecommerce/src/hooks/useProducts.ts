import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import initialProducts from "../components/entities/InitialProducts";
import useProductQueryStore from "../store";


export interface Products{
  id: number
  title: string
  description: string
  retail_price: number
  wholesale_price: number
  inventory: number
  collection: number 
}

const apiClient = new ApiClient<Products>("products/");

const useProducts = () => {
  const productQuery = useProductQueryStore((s) => s.ProductQuery);

  return useQuery<Products[], Error>({
    queryKey: ["products", productQuery],
    queryFn: () => apiClient.getAll({
      params: {
        category: productQuery.categoryId,
        price: productQuery.priceRange,
        ordering: productQuery.sortOrder,
        search: productQuery.searchText,
      },
    }),
    // cacheTime: ms('2h'),
    // staleTime: ms("1d"),
    // initialData: initialProducts,
  });
};

export default useProducts;
