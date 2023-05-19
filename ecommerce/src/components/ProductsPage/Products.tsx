import { Grid, GridItem } from "@chakra-ui/react"
import ProductsHeader from "./ProductsHeader"
import ProductList from "./ProductList"
import FilterBar  from "./FilterBar"


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
        <FilterBar />
      </GridItem>
      <GridItem area={"products"}>
        <ProductList />
      </GridItem>
    </Grid>
  )
}

export default Products