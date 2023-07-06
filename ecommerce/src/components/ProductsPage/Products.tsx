import { Grid, GridItem } from "@chakra-ui/react";
import ProductsHeader from "./ProductsHeader";
import ProductList from "./ProductList";
import SliderInput from "./SliderInput";
import SortButton from "./SortButton";
import { useEffect } from "react";
import CheckBoxInput from "./CheckBoxInput";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid
      templateAreas={{
        lg: `"header header"
              "filters products"`,
      }}
      gridTemplateRows="auto"
      gridTemplateColumns={"20% 80%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <ProductsHeader />
      </GridItem>
      <GridItem area={"filters"}>
        <SliderInput />
        <CheckBoxInput />
      </GridItem>
      <GridItem area={"products"}>
        <SortButton />
        <ProductList />
      </GridItem>
    </Grid>
  );
};

export default Products;
