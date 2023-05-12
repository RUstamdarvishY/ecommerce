import { Divider, HStack } from '@chakra-ui/react' 
import Contacts from './Contacts'
import Info from './Info'
import Map from './Map'

const Footer = () => {
  return (
    <>
    <Divider marginTop='50px'/>
    <Contacts/>
    <HStack>
    <Info/>
    <Map/>
    </HStack>
    </>
  )
}

export default Footer