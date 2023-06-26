import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import noImage from "../../assets/placeholder-image.png";
import useCategories from "../../hooks/useCategories";
import useProductQueryStore from "../../productStore";
import { Link } from "react-router-dom";

const CategoryTiles = () => {
  const { data: categoryCards } = useCategories();

  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);

  return (
    <SimpleGrid
      spacing={4}
      gridTemplateRows={"50% 50%"}
      gridTemplateColumns={"50% 50%"}
    >
      {categoryCards?.slice(0, 4).map((c) => (
        <Link to={c.slug + '/'}>
        <Card
          key={c.id}
          position="relative"
          width="235px"
          height="235px"
          onClick={() => setCategoryId(c.id)}
        >
          <Image
            src={noImage}
            position="absolute"
            left="10%"
            top="5%"
            width="80%"
            height="70%"
          ></Image>
          <CardBody>
            <Center>
              <Text position="absolute" top="82%">
                {c.title}
              </Text>
            </Center>
          </CardBody>
        </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default CategoryTiles;
