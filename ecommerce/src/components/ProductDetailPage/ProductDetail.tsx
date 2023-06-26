import { Grid, GridItem } from "@chakra-ui/react"
import ProductImageRoll from "./ProductImageRoll"
import ProductInfo from "./ProductInfo"
import ProductHeader from "./ProductHeader"


const ProductDetail = () => {
  return (
    <Grid
      templateAreas={{
        lg: ` "image buy"
              "info info"`,
      }}
      gridTemplateRows="auto"
      gridTemplateColumns={"70% 30%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"image"}>
        <ProductHeader/>
        <ProductImageRoll/>
      </GridItem>
      <GridItem area={"buy"}>
        <div></div>
      </GridItem>
      <GridItem area={"info"}>
        {/* <ProductInfo/> */}
      </GridItem>
    </Grid>
  )
}

export default ProductDetail