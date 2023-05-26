import { HStack, Heading, Text } from "@chakra-ui/react";
import SortButton from "./SortButton";
import useProductQueryStore from "../../store";
import productQuery from "../entities/ProductQuery";
import useCategory from "../../hooks/useCategories";

const ProductsHeader = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const categories = useCategory();

  const currentCategory = categories.data?.find(
    (category) => category.id === categoryId
  );

  return (
    <HStack>
      <Heading>{currentCategory?.title}</Heading>
      <Text>{currentCategory?.product_count}</Text>
      <SortButton />
    </HStack>
  );
};

export default ProductsHeader;
