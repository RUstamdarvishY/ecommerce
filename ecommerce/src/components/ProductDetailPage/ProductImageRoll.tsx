import { Box, Image } from "@chakra-ui/react"
import ImageSlider from "../ImageSlider"
import useProduct from "../../hooks/useProduct"
import useProductQueryStore from "../../productStore"

const ProductImageRoll = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId)

  const {data: product} = useProduct(productId!)

  

  return (
    <Box>
      <ImageSlider slides={} speed={4000}/>
    </Box>
  )
}

export default ProductImageRoll