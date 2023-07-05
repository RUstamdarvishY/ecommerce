import { useEffect, useState } from "react";
import MiniSearch, { Options, SearchOptions, SearchResult } from "minisearch";
import { Products } from "./useProducts";

function useSearchIndex(
  data: Products[],
  miniSearchOptions: Options,
  searchOptions: SearchOptions = {}
) {

  const [results, setResults] = useState<SearchResult[] | undefined>();
  const [searchIndex, setSearchIndex] = useState<MiniSearch | null>(null)


  useEffect(() => {
    const index = new MiniSearch<Products>(miniSearchOptions);
    index.addAll(data);

    setSearchIndex(index);
  }, [data, miniSearchOptions]);
  
  const search = (value: string) => {
    const newResults = searchIndex?.search(value, searchOptions);
    setResults(newResults) 
  };

  return { results, search };
}

export default useSearchIndex;
