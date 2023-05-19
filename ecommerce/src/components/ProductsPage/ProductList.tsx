import ProductCard from "./ProductCard";
import noImage from "../../assets/placeholder-image.png";
import { List, ListItem } from "@chakra-ui/react";

const ProductList = () => {
  const popularProducts = [
    { id: 1, title: "Батарейки", image: noImage, price: 25 },
    { id: 2, title: "Наушники", image: noImage, price: 17 },
    { id: 3, title: "Колонки", image: noImage, price: 22 },
    { id: 4, title: "Часы", image: noImage, price: 9 },
    { id: 5, title: "Батарейки", image: noImage, price: 25 },
    { id: 6, title: "Наушники", image: noImage, price: 17 },
    { id: 7, title: "Колонки", image: noImage, price: 22 },
    { id: 8, title: "Часы", image: noImage, price: 9 },
  ];

  return (
    <>
      {popularProducts.map((p) => (
        <List spacing={3} key={p.id}>
          <ListItem>
          <ProductCard title={p.title} image={p.image} />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default ProductList;
