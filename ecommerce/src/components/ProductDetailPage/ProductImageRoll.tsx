import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import { useState } from "react";
import noImage from "../../assets/placeholder-image.png";
import productImages from "../entities/ProductImages";

const ProductImageRoll = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = productImages.filter(image => image.id === productId)

  return (
    <>
      <Box
        width="100%"
        height="90%"
        backgroundImage={images.src[currentIndex] || noImage}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        borderRadius={5}
        zIndex="1"
      >
        <UnorderedList
          justifyContent="center"
          position="absolute"
          top="90%"
          left="46%"
        >
          {images.map((image, index) => (
            <ListItem
              key={index}
              margin="10px"
              color="white"
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Image src={images.src[index] || noImage} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
};

export default ProductImageRoll;
