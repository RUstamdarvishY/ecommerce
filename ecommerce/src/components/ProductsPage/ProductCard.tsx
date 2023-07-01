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
import useCreateCartItem from "../../hooks/useCreateCartItem";
import { useCallback } from "react";
import useProductQueryStore from "../../productStore";
import useImage from "../../hooks/useImage";


interface Props {
  products: Products;
}

const ProductCard = ({ products }: Props) => {
  const { id, title, retail_price, wholesale_price, inventory, description } =
    products;

  const {mutate: createCartItem } = useCreateCartItem()

  const setProductId = useProductQueryStore((s) => s.setProductId)


  // const handleOrderClick = useCallback((productId: number) => {
  //   createCartItem(productId)
  // }, [createCartItem]);

  const image = useImage(id)

  return (
    <Link to={'' + id}>
      <Card overflow="hidden" variant="outline" onClick={() => setProductId(id)}>
        <HStack>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            maxH={{ base: "100%", sm: "150px" }}
            src={image?.src[0] || noImage}
            alt={image?.title}
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
              // onClick={() => {handleOrderClick(id)}}
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
