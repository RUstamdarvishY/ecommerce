import { Grid, GridItem } from "@chakra-ui/react"
import ProductImagePanel from "./ProductImagePanel"
import ProductSummary from "./ProductSummary"
import ProductInfo from "./ProductInfo"


const ProductDetail = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"image summary"
              "info info"`,
      }}
      gridTemplateRows="auto"
      gridTemplateColumns={"70% 30%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"image"}>
        <ProductImagePanel/>
      </GridItem>
      <GridItem area={"summary"}>
        <ProductSummary/>
      </GridItem>
      <GridItem area={"info"}>
        <ProductInfo/>
      </GridItem>
    </Grid>
  )
}

export default ProductDetail