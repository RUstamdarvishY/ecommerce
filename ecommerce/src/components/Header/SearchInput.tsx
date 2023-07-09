import {
  InputGroup,
  InputLeftAddon,
  Input,
  Box,
  VStack,
  Text,
  Card,
  CardBody,
  HStack,
  Image,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import useProducts from "../../hooks/useProducts";
import useSearchIndex from "../../hooks/useSearchIndex";
import useProductQueryStore from "../../productStore";
import noImage from "../../assets/placeholder-image.png";
import useCategories from "../../hooks/useCategories";
import { SearchResult } from "minisearch";
import productImages from "../entities/ProductImages";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const { data: categories } = useCategories();

  const { results, search } = useSearchIndex(
    products || [],
    miniSearchOptions,
    {}
  );

  const [searchText, setSearchText] = useState("");
  const setProductId = useProductQueryStore((s) => s.setProductId);
  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);

  const getRoute = (result: SearchResult) => {
    const category = categories?.filter((c) => c.id === result.collection);

    if (category) return `/${category[0]?.slug}/${result.id}`;
  };

  const handleClick = (result: SearchResult, results: SearchResult[]) => {
    setCategoryId(result.collection);
    setProductId(result.id);
    setSearchText("");
    results.length = 0;
  };

  return (
    <VStack width="65%">
      <InputGroup marginBottom={-2}>
        <InputLeftAddon as={AiOutlineSearch} />
        <Input
          value={searchText}
          type="text"
          onChange={(e) => {
            search(e.target.value), setSearchText(e.target.value);
          }}
          placeholder="Найти товар"
          borderRadius={20}
          borderWidth="2px"
          onSubmitCapture={(e) => (e.currentTarget.value = "")}
        />
      </InputGroup>
      <Box width="inherit" position="relative">
        {results &&
          results.map((result) => (
            <Link to={getRoute(result) || "/"}>
              <Card
                textAlign="left"
                zIndex={1}
                position="absolute"
                left="-27%"
                marginTop={2}
                width="155%"
                border="2px"
                as={"button"}
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
                onClick={() => handleClick(result, results)}
              >
                <CardBody>
                  <HStack>
                    <Image
                      src={
                        productImages.find((image) => image.id === result.id)
                          ?.src[0] || noImage
                      }
                      boxSize={8}
                    />
                    <Text>
                      {result.title}, {result.wholesale_price}р
                    </Text>
                  </HStack>
                </CardBody>
              </Card>
            </Link>
          ))}
      </Box>
    </VStack>
  );
};

export default SearchInput;
