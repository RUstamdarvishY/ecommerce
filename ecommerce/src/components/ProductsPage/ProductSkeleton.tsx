import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react"

const ProductSkeleton = () => {
  return (
    <Card>
        <Skeleton/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default ProductSkeleton