import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import useProductQueryStore from "../../productStore";

const AddItem = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const { data: product } = useProduct(productId!);

  const [productCount, setProductCount] = useState(1);

  return (
    <>
      <Button
        disabled={productCount === 1}
        onClick={() => setProductCount(productCount - 1)}
      >
        -
      </Button>
      <Text>{productCount}</Text>
      <Button
        disabled={
          (product && productCount > product.inventory) || productCount > 100
        }
        onClick={() => setProductCount(productCount + 1)}
      >
        +
      </Button>
      <Text>
        {Math.round(
          (product?.wholesale_price &&
            product.wholesale_price * productCount) ||
            0
        )}
        р
      </Text>
    </>
  );
};

export default AddItem;
