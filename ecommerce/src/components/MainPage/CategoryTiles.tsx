import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Center,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";
import useCategories from "../../hooks/useCategories";

const CategoryTiles = () => {
  const {data: categoryCards} = useCategories()

  return (
    <SimpleGrid
      spacing={4}
      gridTemplateRows={"50% 50%"}
      gridTemplateColumns={"50% 50%"}
    >
      {categoryCards?.slice(2, 6).map((c) => (
        <LinkBox as="article" borderRadius={5}>
          <Card key={c.id} position='relative' width='235px' height='235px'>
              <Image src={noImage} position='absolute' left='10%' top='5%' width='80%' height='70%'></Image>
            <CardBody>
              <LinkOverlay href={c.slug}>
                <Center>
                <Text position='absolute' top='82%'>{c.title}</Text>
                </Center>
              </LinkOverlay>
            </CardBody>
          </Card>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
};

export default CategoryTiles;
