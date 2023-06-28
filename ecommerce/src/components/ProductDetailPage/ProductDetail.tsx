import { Grid, GridItem } from "@chakra-ui/react"
import ProductInfo from "./ProductInfo"
import SimilarProducts from "./SimilarProducts"
import BuyPanel from "./BuyPanel"


const ProductDetail = () => {
  return (
    <Grid
      templateAreas={{
        lg: ` "info buy"
              "similar similar"`,
      }}
      gridTemplateRows={'auto'}
      gridTemplateColumns={"70% 30%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"info"}>
        <ProductInfo/>
      </GridItem>
      <GridItem area={"buy"}>
        <BuyPanel/>
      </GridItem>
      <GridItem area={"similar"}>
        <SimilarProducts/>
      </GridItem>
    </Grid>
  )
}

export default ProductDetail