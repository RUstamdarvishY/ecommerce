import {
  ListItem,
  UnorderedList,
  Image,
  Text,
  CardHeader,
  Card,
  CardFooter,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import useProductQueryStore from "../../productStore";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";

const SimilarProducts = () => {
  const { data: products } = useProducts();

  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const { data: category } = useCategory(categoryId!);

  const similarProducts = products
    ?.filter((p) => p.collection === categoryId && p.id !== productId)
    .slice(0, 5);

  return (
    <>
      <Heading marginTop="50%" marginLeft="3%" textAlign="left">
        Похожие товары
      </Heading>
      <UnorderedList display="flex" marginTop="2%" listStyleType="none">
        {similarProducts?.map((p) => (
          <Link to={"/" + category?.slug + "/" + p.id}>
            <ListItem key={p.id}>
              <Card marginX={4} height='40vh' width='16vw'>
                <CardHeader>{p.title}</CardHeader>
                <CardBody>{/* <Image src={image} /> */}</CardBody>
                <CardFooter>
                  <Text>{p.wholesale_price}р</Text>
                </CardFooter>
              </Card>
            </ListItem>
          </Link>
        ))}
      </UnorderedList>
    </>
  );
};

export default SimilarProducts;
