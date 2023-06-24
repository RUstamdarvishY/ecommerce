import { InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import useProductQueryStore from "../../productStore";
import useSearchIndex from "../../hooks/useSearchIndex";
import InputPopUp from "./InputPopUp";
import useProducts from "../../hooks/useProducts";

const miniSearchOptions = {
  fields: ["title", "description"],
  storeFields: ["title", "description", "price"],
  searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25,
  },
};

const SearchInput = () => {
  const { data: products } = useProducts();

  const setSearchText = useProductQueryStore((s) => s.setSearchText);

  const { results, search } = useSearchIndex(
    products || [],
    miniSearchOptions,
    {}
  );

  return (
    <>
      <InputGroup>
        <InputLeftAddon as={AiOutlineSearch} />
        <Input
          type="text"
          onChange={(e) => {
            search(e.target.value);
            setSearchText(e.target.value);
          }}
          placeholder="Найти товар"
          borderRadius={20}
          borderWidth="2px"
        />
      </InputGroup>
      <Box>
        {results.map((result) => (
          <InputPopUp key={result} results={result} />
        ))}
      </Box>
    </>
  );
};

export default SearchInput;
