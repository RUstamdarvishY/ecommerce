import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductContainer = ({ children }: Props) => {
  return (
    <Box 
      width='73vw'
      height='35vh'
      borderRadius="10px"
      overflow="hidden"
      margin={10}
    >
      {children}
    </Box>
  );
};

export default ProductContainer;