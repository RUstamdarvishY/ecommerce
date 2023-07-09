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

  const categoryTilesImages = [
    { id: 1, title: "батарейки", src: "/categoryImages/pexels-battery.jpg" },
    {
      id: 2,
      title: "увеличительные стекла",
      src: "/categoryImages/pexels-glass.jpg",
    },
    { id: 3, title: "фонарики", src: "/categoryImages/pexels-flashlight.jpg" },
    { id: 4, title: "зажигалки", src: "/categoryImages/pexels-lighter.jpg" },
  ];

  const getCategoryImage = (id: number) => {
    for (let i = 0; i < categoryTilesImages.length; i++) {
      if (id === categoryTilesImages[i].id) {
        return categoryTilesImages[i].src;
      }
    }
    return noImage;
  };

  return (
    <SimpleGrid
      spacing={4}
      gridTemplateRows={"50% 50%"}
      gridTemplateColumns={"50% 50%"}
    >
      {categoryCards?.slice(0, 4).map((c) => (
        <Link to={c.slug + "/"}>
          <Card
            key={c.id}
            position="relative"
            width="235px"
            height="235px"
            onClick={() => setCategoryId(c.id)}
          >
            <Image
              src={getCategoryImage(c.id)}
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
