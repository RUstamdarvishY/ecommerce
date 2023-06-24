import { Grid, GridItem } from "@chakra-ui/react";
import ProductsHeader from "./ProductsHeader";
import ProductList from "./ProductList";
import SliderInput from "./SliderInput";
import CheckBoxInput from "./CheckBoxInput";
import filterOptions from "../entities/ProductFilters";
import SortButton from "./SortButton";

const Products = () => {
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
        <CheckBoxInput productFilters={filterOptions} />
      </GridItem>
      <GridItem area={"products"}>
        <SortButton />
        <ProductList />
      </GridItem>
    </Grid>
  );
};

export default Products;
