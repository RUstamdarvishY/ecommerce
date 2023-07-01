import {
  LinkBox,
  Card,
  CardBody,
  LinkOverlay,
  Box,
  Text,
  Button,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";
import { Products } from "../../hooks/useProducts";
import useProductQueryStore from "../../productStore";
import { useEffect } from "react";
import useImage from "../../hooks/useImage";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";

interface Props {
  products: Products;
}

const PopularProductsCard = ({ products }: Props) => {
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);
  const sortOrder = useProductQueryStore((s) => s.ProductQuery.sortOrder);

  const setProductId = useProductQueryStore((s) => s.setProductId);
  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);
  
  const { id, title, retail_price, wholesale_price, collection } = products;
  
  useEffect(() => {
    setSortOrder("date");
  }, [sortOrder, setSortOrder]);
  
  const image = useImage(id);
  const {data: category } = useCategory(collection)
  
  return (
    <>
      <LinkBox as="article" borderRadius={5}>
        <Link to={"/" + category?.slug + "/" + id}>
        <Card
          key={id}
          position="relative"
          overflow="hidden"
          width="380px"
          height="330px"
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
          onClick={() => {setCategoryId(collection), setProductId(id)}}
        >
          <CardBody>
            <Box
              position="absolute"
              height="55%"
              width="85%"
              backgroundImage={image?.src[0] || noImage}
              backgroundPosition="center"
              backgroundSize="contain"
              backgroundRepeat='no-repeat'
              border="1px"
            ></Box>
            <LinkOverlay href="#">
              <Text fontSize={"md"} position="absolute" top="7%" left="8%">
                {retail_price}р
              </Text>
              <Text fontSize={"md"} position="absolute" top="15%" left="8%">
                {wholesale_price}р
              </Text>
              <Center>
                <Text
                  fontSize={"md"}
                  overflow="hidden"
                  position="absolute"
                  top="66%"
                >
                  {title}
                </Text>
              </Center>
            </LinkOverlay>
          </CardBody>
          <CardFooter>
            <Button
              variant="solid"
              position="absolute"
              top="80%"
              left="25%"
              colorScheme="blue"
              onClick={() => console.log(id)}
            >
              Добавить в корзину
            </Button>
          </CardFooter>
        </Card>
        </Link>
      </LinkBox>
    </>
  );
};

export default PopularProductsCard;
