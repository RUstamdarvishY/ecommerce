import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import useProductQueryStore from "../productStore";

export interface Products {
  id: number;
  title: string;
  description: string;
  retail_price: number;
  wholesale_price: number;
  date_added: Date;
  inventory: number;
  collection: number;
}

const apiClient = new ApiClient<Products>("products/");

const useProducts = () => {
  const productQuery = useProductQueryStore((s) => s.ProductQuery);

  return useQuery<Products[], Error>({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          category: productQuery.categoryId,
          price: productQuery.priceRange,
          ordering: productQuery.ordering,
          search: productQuery.searchText,
        },
      }),
    cacheTime: ms("2h"),
    staleTime: ms("1d"),
  });
};

export default useProducts;
