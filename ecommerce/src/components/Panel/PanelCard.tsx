import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Button,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const PanelCard = () => {
  return (
    <Card marginTop='10px' height='500px' width='700px' zIndex='-2' position='relative'>
      <CardBody >
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          height='350px'
          width='660px'
          position='absolute'
          alt="Green double couch with wooden legs"
          borderRadius={5}
          zIndex="-1"
        />
          <IconButton
            aria-label="previos"
            zIndex="0"
            as={BsArrowRight}
            position='absolute'
            marginLeft='310px'
            marginTop='170px'
          ></IconButton>
          <IconButton
            aria-label="next"
            zIndex="0"
            position='absolute'
            as={BsArrowLeft}
            marginLeft='-350px'
            marginTop='170px'
          ></IconButton>
        <Stack mt="6" spacing="2">
          <Text marginTop='340px'>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl" position='absolute' paddingLeft='15px'>
            $450
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" colorScheme="blue" marginTop="-35px">
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PanelCard;
