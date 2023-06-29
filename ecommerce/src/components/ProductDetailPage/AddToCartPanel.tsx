import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Heading,
    CardFooter,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const AddToCartPanel = () => {
    const navigate = useNavigate()

  return (
    <Card marginX='10%' marginY='20%'>
        <CardHeader>
          <Heading>{450}р</Heading>
        </CardHeader>
        <CardBody>
          <Button
            variant="solid"
            colorScheme="blue"
          >
            Добавить в корзину
          </Button>
        </CardBody>
        <CardFooter justifyContent="center">
          <Button variant="link" colorScheme="red" onClick={() => navigate("/")}>
            Продолжить покупки
          </Button>
        </CardFooter>
      </Card>
  )
}

export default AddToCartPanel