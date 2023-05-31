import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import initialCategories from "../components/entities/InitialCategoies";
import CategoryDescription from "../components/entities/CategoryDescription";

export interface Categories {
  id: number;
  title: string;
  products_count: number;
  description_items: CategoryDescription[]
}


const apiClient = new ApiClient<Categories>("collections/");

const useCategories = () => {
  return useQuery<Categories[], Error>({
    queryKey: ["categories"],
    queryFn: apiClient.getAll({}),
    cacheTime: ms('2h'),
    staleTime: ms("1d"),
    initialData: initialCategories,
  });
};

export default useCategories;
