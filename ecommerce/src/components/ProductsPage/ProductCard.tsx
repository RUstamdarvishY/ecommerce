import {
  Card,
  CardBody,
  Heading,
  Button,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";

interface Props{
  title: string;
  image: string;
}


const ProductCard = ({title, image}: Props) => {
  return (
    <Card overflow="hidden" variant="outline" marginX={10} marginBottom={5}>
      <HStack>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{ base: "100%", sm: "150px" }}
          src={image}
          alt="Caffe Latte"
        />
        <CardBody>
          <Heading size="md" textAlign="left">
            {title}
          </Heading>
          <Text py="2" textAlign="left" noOfLines={7} overflow='scroll'>
            Описание по параметрам 'def item' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda deleniti dignissimos magnam alias veniam neque dolor, fugit itaque qui.
          </Text>
        </CardBody>
        <CardBody>
          <Heading size="lg" textAlign="center">
            Цена
          </Heading>
          <Button variant="solid" colorScheme="red">
            Положить в корзину
          </Button>
          <Text py="2" textAlign="center">
            В наличии
          </Text>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default ProductCard;
