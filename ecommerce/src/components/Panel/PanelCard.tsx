import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const PanelCard = () => {
  return (
    <Card>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          zIndex="-1"
        />
          <IconButton
            aria-label="previos"
            zIndex="0"
            as={BsArrowLeft}
          ></IconButton>
          <IconButton
            aria-label="next"
            zIndex="0"
            as={BsArrowRight}
          ></IconButton>
        <Stack mt="6" spacing="2">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" colorScheme="blue" marginTop="-35px">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PanelCard;
