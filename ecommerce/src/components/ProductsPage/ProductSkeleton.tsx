import { Skeleton, SkeletonText } from "@chakra-ui/react"

const ProductSkeleton = () => {
  return (
        <Skeleton width='inherit' height='inherit'>
            <SkeletonText/>
        </Skeleton>
  )
}

export default ProductSkeleton