import ProductCard from "./ProductCard";
import { List, ListItem, Spinner } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import useProductQueryStore from "../../store";

const ProductList = () => {
  // const productQuery = useProductQueryStore()
  const {data: products, error, isLoading} = useProducts();


  if (error) return <p>{error.message}</p>

  if (isLoading) return <Spinner/>

  return (
    <>
      {products?.map((p) => (
        <List spacing={3} key={p.id}>
          <ListItem>
          <ProductCard products={p} />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default ProductList;
