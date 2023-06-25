import { Image, HStack } from "@chakra-ui/react"
import eLogo from '../../assets/elogo.png'
import SearchInput from "./SearchInput"
import CartIcon from "./CartIcon"
import CatalogList from "./CatalogList"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (<>
  <HStack>
    <Link to='/'>
      <Image src={eLogo} boxSize='60px' marginRight='30px' borderRadius={10}/>
    </Link>
    <CatalogList/>
    {/* <SearchInput/> */}
    <CartIcon/>
  </HStack>
  </>)
}

export default NavBar