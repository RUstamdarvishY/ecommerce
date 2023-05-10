import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react'

const PanelSkeleton = () => {
  return (
    <Card>
        <Skeleton/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default PanelSkeleton