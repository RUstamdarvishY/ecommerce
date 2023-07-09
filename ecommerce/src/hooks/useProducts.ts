import { useQuery } from "@tanstack/react-query";
import ApiClient, { Tags } from "../services/ApiClient";
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
  tags: Tags[];
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
          wholesale_price: productQuery.priceRange,
          ordering: productQuery.ordering,
          search: productQuery.searchText,
          tags: productQuery.tags
        },
      }),
    cacheTime: ms("2h"),
    staleTime: ms("1d"),
  });
};

export default useProducts;
