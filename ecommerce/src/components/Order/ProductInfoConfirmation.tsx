import {
  Card,
  HStack,
  CardBody,
  Heading,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Products } from "../../hooks/useProducts";
import noImage from "../../assets/placeholder-image.png";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  cartItem: Products;
}

const ProductInfoConfirmation = ({ cartItem }: Props) => {
  const { id, title, retail_price, wholesale_price, inventory, description } =
    cartItem;

  return (
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
          <IconButton
            aria-label="delete button"
            as={RiDeleteBin6Line}
            variant="solid"
            colorScheme="red"
          />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default ProductInfoConfirmation;
