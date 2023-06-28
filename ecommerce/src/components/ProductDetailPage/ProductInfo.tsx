import {
  Card,
  Box,
  Text,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useProduct from "../../hooks/useProduct";
import ProductImageRoll from "./ProductImageRoll";
import { useState } from "react";

const ProductInfo = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const { data: product } = useProduct(productId!);

  const [productCount, setProductCount] = useState(1);

  return (
    <Card width="50%" style={{ border: "none", boxShadow: "none" }}>
      <CardHeader>
        <Heading>{product?.title}</Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <ProductImageRoll/>
          <Button
            disabled={productCount === 1}
            onClick={() => setProductCount(productCount - 1)}
          >
            -
          </Button>
          <Text>{productCount}</Text>
          <Button
            disabled={
              (product && productCount > product.inventory) ||
              productCount > 100
            }
            onClick={() => setProductCount(productCount + 1)}
          >
            +
          </Button>
          
          <Text>{Math.round(product?.wholesale_price && product.wholesale_price * productCount || 0)}</Text>
        </HStack>
      </CardBody>
      <CardFooter>
        <Heading size="md" textAlign="left">
          Описание
        </Heading>
        <Text fontSize="md" textAlign="left">
          {product?.description}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductInfo;
