import { IconButton, Text, Circle, Box } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <>
      <Box>
        <Link to="корзина/">
        <IconButton
          aria-label="open cart"
          as={AiOutlineShoppingCart}
          marginRight="3px"
          zIndex="-1"
          position="relative"
          bg='transparent'
          boxSize='30px'
        />
        </Link>
        <Circle
          size="15px"
          paddingTop={1}
          bg="tomato"
          color="white"
          position="absolute"
          zIndex="0"
          fontSize={10}
          marginTop='-35px'
          marginLeft='24px'
        >
          5
        </Circle>
      </Box>
      <Text>Корзина</Text>
    </>
  );
};

export default CartIcon;
