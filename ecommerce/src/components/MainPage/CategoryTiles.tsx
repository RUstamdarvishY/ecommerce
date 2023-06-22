import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";

const CategoryTiles = () => {
  const categoryCards = [
    { id: 1, title: "Батарейки", image: noImage },
    { id: 2, title: "Наушники", image: noImage },
    { id: 3, title: "Колонки", image: noImage },
    { id: 4, title: "Часы", image: noImage },
  ];

  return (
    <SimpleGrid
      spacing={4}
      gridTemplateRows={"50% 50%"}
      gridTemplateColumns={"50% 50%"}
    >
      {categoryCards.map((c) => (
        <LinkBox as="article" borderRadius={5} width='220px'>
          <Card  >
            <CardBody key={c.id}>
              <Image src={c.image} boxSize="170px"></Image>
              <LinkOverlay href="#">
                <Text>{c.title}</Text>
              </LinkOverlay>
            </CardBody>
          </Card>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
};

export default CategoryTiles;
