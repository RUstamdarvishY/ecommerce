import { Grid, GridItem } from "@chakra-ui/react"
import ProductInfo from "./ProductInfo"
import SimilarProducts from "./SimilarProducts"
import AddToCartPanel from "./AddToCartPanel"
import { useEffect } from "react"


const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid
      templateAreas={{
        lg: ` "info buy"
              "similar similar"`,
      }}
      gridTemplateRows={'auto'}
      gridTemplateColumns={"55% 45%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"info"}>
        <ProductInfo/>
      </GridItem>
      <GridItem area={"buy"}>
        <AddToCartPanel/>
      </GridItem>
      <GridItem area={"similar"}>
        <SimilarProducts/>
      </GridItem>
    </Grid>
  )
}

export default ProductDetail