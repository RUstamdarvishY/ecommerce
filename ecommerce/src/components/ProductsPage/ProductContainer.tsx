import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      marginY={10}
    >
      {children}
    </Box>
  );
};

export default ProductContainer;