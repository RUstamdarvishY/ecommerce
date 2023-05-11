import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai"


const SearchInput = () => {
  return (
  <InputGroup>
    <InputLeftAddon as={AiOutlineSearch} />
    <Input type='text' placeholder='Найти товар' borderRadius={20} borderWidth='2px'/>
  </InputGroup>
  )
}

export default SearchInput