import { HStack, Heading, Text } from "@chakra-ui/react";

const ProductsHeader = () => {
  return (
      <HStack>
        <Heading>категория</Heading>
          <Text>кол-во т.</Text>
      </HStack>
  );
};

export default ProductsHeader;
