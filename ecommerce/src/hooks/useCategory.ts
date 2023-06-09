import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import ms from "ms";
import { Categories } from "./useCategories";

const apiClient = new ApiClient<Categories>("collections/");

const useCategory = (categoryId: number | string) => {
  return useQuery<Categories, Error>({
    queryKey: ["categories", categoryId],
    queryFn: () => apiClient.get(categoryId),
    cacheTime: ms("2h"),
    staleTime: ms("1d"),
  });
};

export default useCategory;
