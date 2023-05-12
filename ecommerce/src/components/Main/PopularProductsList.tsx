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
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";

const PopularProductsList = () => {
  const popularProducts = [
    { id: 1, title: "Батарейки", image: noImage, price: 25 },
    { id: 2, title: "Наушники", image: noImage, price: 17 },
    { id: 3, title: "Колонки", image: noImage, price: 22 },
    { id: 4, title: "Часы", image: noImage, price: 9 },
    { id: 5, title: "Батарейки", image: noImage, price: 25 },
    { id: 6, title: "Наушники", image: noImage, price: 17 },
    { id: 7, title: "Колонки", image: noImage, price: 22 },
    { id: 8, title: "Часы", image: noImage, price: 9 },
    { id: 9, title: "Батарейки", image: noImage, price: 25 },
    { id: 10, title: "Наушники", image: noImage, price: 17 },
    { id: 11, title: "Колонки", image: noImage, price: 22 },
    { id: 12, title: "Часы", image: noImage, price: 9 },
  ];

  return (
    <>
    <Text marginTop='80px' paddingRight='70vw' paddingBottom='12px' fontSize='2xl'>Популярные товары</Text>
    <SimpleGrid
      spacing={4}
      gridTemplateRows="auto"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={5}
      rowGap={12}
    >
      {popularProducts.map((p) => (
        <LinkBox as="article" borderRadius={5}>
          <Card overflow='hidden' width='285px' height='335px'>
            <CardBody key={p.id}>
              <Image src={p.image} boxSize="170px" width='240px' border='1px'></Image>
              <LinkOverlay href="#">
                <Text paddingTop='12px' fontSize={'lg'}>{p.price}</Text>
              </LinkOverlay>
                <Text noOfLines={2}>{p.title}</Text>
            </CardBody>
            <CardFooter>
              <Button variant="solid" position='absolute' marginLeft='28px' marginTop='-30px' colorScheme="blue">Добавить в корзину</Button>
            </CardFooter>
          </Card>
        </LinkBox>
      ))}
    </SimpleGrid>
    </>
  );
};

export default PopularProductsList;
