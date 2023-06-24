import { List, ListItem } from "@chakra-ui/react"
import ProductInfoConfirmation from "./ProductInfoConfirmation"
import useOrderStore from "../../orderStore"


const Cart = () => {
  const orderItems = useOrderStore((s) => s.orderItems)
  const setDeleteProductFromCart = useOrderStore((s) => s.setDeleteProductFromCart)
 


  return (
    // {orderItems?.map((o) => (
    //   <List spacing={3} key={o.id}>
    //     <ListItem>
    //       <ProductInfoConfirmation cartItem={o}/>
    //     </ListItem>
    //   </List>
    <div></div>
  )
}


export default Cart