import {
  SimpleGrid,
  LinkBox,
  Card,
  CardBody,
  LinkOverlay,
  Box,
  Text,
  Button,
  CardFooter,
  Spinner,
  Center,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";
import useProducts from "../../hooks/useProducts";
import useProductQueryStore from "../../productStore";
import { useEffect } from "react";


const PopularProductsList = () => {
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);
  const sortOrder = useProductQueryStore((s) => s.ProductQuery.sortOrder);


  useEffect(() => {
    setSortOrder("date");
  }, [sortOrder, setSortOrder]);

  const { data: popularProducts, isLoading } = useProducts();

  if (isLoading) return <Spinner />;


  return (
    <>
      <Text marginTop="10vh" marginBottom="5vh" fontSize="2xl">
        Популярные товары
      </Text>
      <SimpleGrid
        spacing={4}
        gridTemplateRows="auto"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={5}
        rowGap={12}
      >
        {popularProducts?.slice(0, 12).map((p) => (
          <LinkBox as="article" borderRadius={5}>
            <Card
              key={p.id}
              position="relative"
              overflow="hidden"
              width="280px"
              height="330px"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
              }}
            >
              <CardBody>
                <Box
                  position="absolute"
                  height="55%"
                  width="85%"
                  backgroundImage={p.image || noImage}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  border="1px"
                ></Box>
                <LinkOverlay href="#">
                  <Text fontSize={"md"} position="absolute" top="7%" left="8%">
                    {p.retail_price}р
                  </Text>
                  <Text fontSize={"md"} position="absolute" top="15%" left="8%">
                    {p.wholesale_price}р
                  </Text>
                  <Center>
                    <Text
                      fontSize={"md"}
                      overflow="hidden"
                      position="absolute"
                      top="66%"
                    >
                      {p.title}
                    </Text>
                  </Center>
                </LinkOverlay>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  position="absolute"
                  top="80%"
                  left="16%"
                  colorScheme="blue"
                  onClick={() => console.log(p.id)}
                >
                  Добавить в корзину
                </Button>
              </CardFooter>
            </Card>
          </LinkBox>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PopularProductsList;
