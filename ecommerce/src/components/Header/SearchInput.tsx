import {
  InputGroup,
  InputLeftAddon,
  Input,
  Box,
  VStack,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import useProducts from "../../hooks/useProducts";
import useSearchIndex from "../../hooks/useSearchIndex";
import SuggestionsDropdown from "./SuggestionsDropdown";

const miniSearchOptions = {
  fields: ["title", "description"],
  storeFields: ["title", "description", "wholesale_price", "collection"],
  searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25,
  },
};

const SearchInput = () => {
  const { data: products } = useProducts();

  const { results, search } = useSearchIndex(
    products || [],
    miniSearchOptions,
    {}
  );

  return (
    <VStack width="65%">
      <InputGroup>
        <InputLeftAddon as={AiOutlineSearch} />
        <Input
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Найти товар"
          borderRadius={20}
          borderWidth="2px"
        />
      </InputGroup>
      <Box width="inherit" position='relative'>
            {results &&
              results.map((result) => (
                <SuggestionsDropdown key={result.id} result={result} />
              ))}
      </Box>
    </VStack>
  );
};

export default SearchInput;
