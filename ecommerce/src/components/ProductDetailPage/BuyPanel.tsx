import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import { useNavigate } from "react-router-dom";


const BuyPanel = () => {
  const productId = useProductQueryStore((s) => s.ProductQuery.productId);

  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <Heading>Итого: {450}р</Heading>
      </CardHeader>
      <CardBody>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => console.log(productId)}
        >
          Оформить заказ
        </Button>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button variant="link" colorScheme="red" onClick={() => navigate("/")}>
          Продолжить покупки
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BuyPanel;
