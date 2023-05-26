import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import initialCategories from "../components/entities/InitialCategoies";
import Categories from "../components/entities/Categories";

const apiClient = new ApiClient<Categories>("collections/");

const useCategory = () => {
  return useQuery<Categories[], Error>({
    queryKey: ["category"],
    queryFn: apiClient.getAll,
    cacheTime: ms('2h'),
    staleTime: ms("1d"),
    initialData: initialCategories,
  });
};

export default useCategory;
