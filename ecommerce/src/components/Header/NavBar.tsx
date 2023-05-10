import { Image, HStack } from "@chakra-ui/react"
import eLogo from '../../assets/elogo.png'
import SearchInput from "./SearchInput"
import ThemeSwitch from "./ThemeSwitch"
import Cart from "./Cart"


const NavBar = () => {
  return (<>
  <HStack>
    <Image src={eLogo} boxSize='60px' marginRight='30px'/>
    <SearchInput/>
    <ThemeSwitch/>
    <Cart/>
  </HStack>
  </>)
}

export default NavBar