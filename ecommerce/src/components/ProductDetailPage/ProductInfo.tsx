import {
  Card,
  Text,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  HStack,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import useProduct from "../../hooks/useProduct";
import { useState } from "react";
import useImage from "../../hooks/useImage";
import noImage from "../../assets/placeholder-image.png";

const ProductInfo = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const { data: product } = useProduct(productId!);
  const image = useImage(productId!);

  
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Card width="90%" style={{ border: "none", boxShadow: "none" }}>
      <CardHeader>
        <Heading textAlign='center'>{product?.title}</Heading>
      </CardHeader>
      <CardBody position='relative'>
            <HStack>
            <UnorderedList
            >
              {image?.src.map((s, index) => (
                <ListItem
                  key={index}
                  marginY="9%"
                  color="white"
                  width='30%'
                  cursor="pointer"
                  borderRadius={2}
                  backgroundColor={'blue'}
                  _hover={{
                    transform: "scale(1.06)",
                    transition: "transform .15s ease-in",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image src={s || noImage}/>
                </ListItem>
              ))}
            </UnorderedList>
            <Image
              position='absolute'
              left='30%'
              src={image?.src[currentIndex] || noImage}
              backgroundSize="cover"
              backgroundPosition="center"
              
            />
            </HStack>
          
      </CardBody>
      <CardBody>
        <Heading size="md" textAlign="left" marginTop={10}>
          Описание:
        </Heading>
      </CardBody>
      <CardFooter>
        <Text fontSize="md" textAlign="left" marginTop={-6}>
          {product?.description}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductInfo;
