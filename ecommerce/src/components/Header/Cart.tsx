import { IconButton, Text, Circle, Box } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <Box>
        <IconButton
          aria-label="open cart"
          as={BsCart3}
          marginRight="3px"
          zIndex="-1"
          position="relative"
          bg='transparent'
          boxSize='30px'
        />
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

export default Cart;
