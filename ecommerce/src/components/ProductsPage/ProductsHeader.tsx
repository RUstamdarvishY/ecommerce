import { HStack, Heading, Text } from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useCategories from "../../hooks/useCategories";

const ProductsHeader = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const { data: categories } = useCategories();

  const currentCategory = categories?.find(
    (category) => category.id === categoryId
  );

  let label = "нет товаров";


  if (currentCategory && currentCategory.products_count === 1) {
    label = "товар";
  } else if (
    currentCategory &&
    currentCategory.products_count > 1 &&
    currentCategory.products_count < 5
  ) {
    label = "товара";
  } else if (currentCategory && currentCategory.products_count >= 5) {
    label = "товаров";
  }

  return (
    <>
      <HStack marginBottom={18}>
        <Heading>{currentCategory?.title}</Heading>
        <Text fontSize="lg">
          {currentCategory?.products_count || ''} {label}
        </Text>
      </HStack>
    </>
  );
};

export default ProductsHeader;
