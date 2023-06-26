import {
  Card,
  Box,
  Text,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useCategory from "../../hooks/useCategory";
import useCategories from "../../hooks/useCategories";

interface Props {
  categoryDescriptionItems: string[] | undefined;
}

const ProductInfo = ({ categoryDescriptionItems: info }: Props) => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const { data: categories } = useCategories();

  const currentCategory = categories?.find((c) => c.id === categoryId);

  
  return (
    <Card>
      <CardHeader>
        <Heading size="md" textAlign="left">
          Характеристики
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {info?.header}
            </Heading>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {info?.item.title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {info?.item.value}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;
