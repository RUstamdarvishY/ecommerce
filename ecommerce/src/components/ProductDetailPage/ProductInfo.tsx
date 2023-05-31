import { Card, Box, Text, CardHeader, Heading, CardBody, Stack, StackDivider } from '@chakra-ui/react'
import CategoryDescription from '../entities/CategoryDescription'
import useProductQueryStore from '../../store';
import useCategory from '../../hooks/useCategory';
import useCategories from '../../hooks/useCategories';

interface Props{
  categoryDescriptionItems: CategoryDescription
}

const ProductInfo = ({categoryDescriptionItems: info}: Props) => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);
  
  const {data: categories} = useCategories()
  
  const currentCategory = categories?.find(
    (category) => category.id === categoryId
    );
    
    const categoryInterface = useCategory(currentCategory)
    

  return (
    <Card>
  <CardHeader>
    <Heading size='md' textAlign='left'>Характеристики</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {info.header}
        </Heading>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {info.item.title}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {info.item.value}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

export default ProductInfo