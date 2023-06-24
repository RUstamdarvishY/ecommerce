import { HStack, Heading, Text } from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useCategories from "../../hooks/useCategories";

const ProductsHeader = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const { data: categories } = useCategories();

  const currentCategory = categories?.find(
    (category) => category.id === categoryId
  );

  return (
    <>
      <HStack marginBottom={18}>
        <Heading>{currentCategory?.title}</Heading>
        <Text fontSize="lg">{currentCategory?.products_count} Товара</Text>
      </HStack>
    </>
  );
};

export default ProductsHeader;
