import { Grid, GridItem } from "@chakra-ui/react"
import ProductImageRoll from "./ProductImageRoll"
import ProductInfo from "./ProductInfo"
import ProductHeader from "./ProductHeader"
import SimilarProducts from "./SimilarProducts"


const ProductDetail = () => {
  return (
    <Grid
      templateAreas={{
        lg: ` "image buy"
              "info info"
              "similar similar`,
      }}
      gridTemplateRows={'auto'}
      gridTemplateColumns={"70% 30%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"image"}>
        <ProductHeader/>
        {/* <ProductImageRoll/> */} 
      </GridItem>
      <GridItem area={"buy"}>
        <div></div>
      </GridItem>
      <GridItem area={"info"}>
        <ProductInfo/>
      </GridItem>
      <GridItem area={"similar"}>
        <SimilarProducts/>
      </GridItem>
    </Grid>
  )
}

export default ProductDetail