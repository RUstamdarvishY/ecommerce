import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react"

const ProductSkeleton = () => {
  return (
    <Card marginX={10}>
        <Skeleton height='150px'>
        <CardBody>
            <SkeletonText/>
        </CardBody>
        </Skeleton>
    </Card>
  )
}

export default ProductSkeleton