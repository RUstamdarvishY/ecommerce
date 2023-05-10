import { HStack, IconButton, Text } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  return (
    <HStack>
      <IconButton aria-label="open cart" as={BsCart3} marginRight='3px'/>
      <Text color="red">5</Text>
    </HStack>
  );
};

export default Cart;
