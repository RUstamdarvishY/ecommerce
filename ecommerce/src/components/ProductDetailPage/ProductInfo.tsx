import {
  Card,
  Box,
  Text,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useProduct from "../../hooks/useProduct";



const ProductInfo = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId)

  const {data: product} = useProduct(productId!)

  return (
    <Card width='50%'>
      <CardHeader>
        <Heading size="md" textAlign="left">
          Описание
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
            <Text fontSize="md" textAlign='left'>
              {product?.description}
            </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;
