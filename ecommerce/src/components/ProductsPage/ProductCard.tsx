import {
  Card,
  CardBody,
  Heading,
  Button,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Products } from "../../hooks/useProducts";
import noImage from "../../assets/placeholder-image.png";
import { Link } from "react-router-dom";
import useOrderStore from "../../orderStore";

interface Props {
  products: Products;
}

const ProductCard = ({ products }: Props) => {
  const { id, title, retail_price, wholesale_price, inventory, description } =
    products;

  const setAddProductToCart = useOrderStore((s) => s.setAddProductToCart)


  return (
    <Link to={'/' + id}>
      <Card overflow="hidden" variant="outline">
        <HStack>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            maxH={{ base: "100%", sm: "150px" }}
            src={noImage}
            alt="some image"
          />
          <CardBody>
            <Heading size="md" textAlign="left">
              {title}
            </Heading>
            <Text py="2" textAlign="left" noOfLines={4} overflow="scroll">
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
            <Button
              variant="solid"
              colorScheme="red"
              disabled={inventory === 0}
              onClick={() => setAddProductToCart(id)}
            >
              Положить в корзину
            </Button>
            <Text py="2" textAlign="center">
              {inventory > 3
                ? "в наличии"
                : inventory > 0 && inventory <= 3
                ? "осталось мало"
                : "нет в наличии"}
            </Text>
          </CardBody>
        </HStack>
      </Card>
    </Link>
  );
};

export default ProductCard;
