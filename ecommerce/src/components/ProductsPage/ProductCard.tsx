import {
  Card,
  CardBody,
  Heading,
  Button,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Products } from "../../hooks/useProducts"
import noImage from "../../assets/placeholder-image.png"

interface Props{
  products: Products
}


const ProductCard = ({products}: Props) => {
  const {title, retail_price, wholesale_price, inventory, description} = products

  return (
    <Card overflow="hidden" variant="outline" marginX={10} marginBottom={5}>
      <HStack>
        {/* <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{ base: "100%", sm: "150px" }}
          src={image || noImage}
          alt="Caffe Latte"
        /> */}
        <CardBody>
          <Heading size="md" textAlign="left">
            {title}
          </Heading>
          <Text py="2" textAlign="left" noOfLines={7} overflow="scroll">
            {description}
          </Text>
        </CardBody>
        <CardBody>
          <Heading size="lg" textAlign="center">
            {retail_price}
          </Heading>
          <Heading size="lg" textAlign="center">
            {wholesale_price}
          </Heading>
          <Button variant="solid" colorScheme="red" disabled={inventory === 0}>
            Положить в корзину
          </Button>
          <Text py="2" textAlign="center">
            {inventory > 3 ? 'в наличии' : inventory > 0 && inventory <= 3 ? 'осталось мало' : 'нет в наличии'}
          </Text>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default ProductCard;
