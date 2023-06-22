import {
  SimpleGrid,
  LinkBox,
  Card,
  CardBody,
  LinkOverlay,
  Image,
  Text,
  Button,
  CardFooter,
  Spinner,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";
import useProducts from "../../hooks/useProducts";
import useProductQueryStore from "../../store";
import { useEffect } from "react";


const PopularProductsList = () => {
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);
  const sortOrder = useProductQueryStore((s) => s.ProductQuery.sortOrder);

  useEffect(() => {setSortOrder('date')}, [sortOrder]);

  const {data: popularProducts, isLoading}= useProducts()
  
  if (isLoading) return <Spinner />;

  
  return (
    <>
      <Text
        marginTop="80px"
        paddingRight="70vw"
        paddingBottom="12px"
        fontSize="2xl"
      >
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
              overflow="hidden"
              width="285px"
              height="335px"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
              }}
            >
              <CardBody key={p.id}>
                <Image
                  src={noImage}
                  boxSize="170px"
                  width="240px"
                  border="1px"
                ></Image>
                <LinkOverlay href="#">
                  <Text paddingTop="12px" fontSize={"lg"}>
                    {p.retail_price}р
                  </Text>
                  <Text paddingTop="12px" fontSize={"lg"}>
                    {p.wholesale_price}р
                  </Text>
                </LinkOverlay>
                <Text noOfLines={2}>{p.title}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  position="absolute"
                  marginLeft="28px"
                  marginTop="-30px"
                  colorScheme="blue"
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
