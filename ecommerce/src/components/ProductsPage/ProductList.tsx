import ProductCard from "./ProductCard";
import { List, ListItem } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import ProductContainer from "./ProductContainer";
import ProductSkeleton from "./ProductSkeleton";
import useProductQueryStore from "../../productStore";

const ProductList = () => {
  const { data, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3];

  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId)

  const products = data?.filter(p => p.collection === categoryId)

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductContainer key={skeleton}>
            <ProductSkeleton />
          </ProductContainer>
        ))}
      {products?.map((p) => (
        <List spacing={3} key={p.id}>
          <ListItem>
            <ProductContainer>
              <ProductCard products={p} />
            </ProductContainer>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default ProductList;
