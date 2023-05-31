import { HStack, Heading, Text } from "@chakra-ui/react";
import SortButton from "./SortButton";
import useProductQueryStore from "../../store";
import useCategories from "../../hooks/useCategories";

const ProductsHeader = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const {data: categories} = useCategories();

  const currentCategory = categories?.find(
    (category) => category.id === categoryId
  );

  return (
    <HStack>
      <Heading>{currentCategory?.title}</Heading>
      <Text>{currentCategory?.products_count}</Text>
      <SortButton />
    </HStack>
  );
};

export default ProductsHeader;
