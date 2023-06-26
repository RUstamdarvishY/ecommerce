import { Box, Heading } from '@chakra-ui/react'
import useProduct from '../../hooks/useProduct'
import useProductQueryStore from '../../productStore'

const ProductHeader = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId)


  const {data: product} = useProduct(productId!) 

  return (
    <Box>
      <Heading>{product?.title}</Heading>
    </Box>
  )
}

export default ProductHeader