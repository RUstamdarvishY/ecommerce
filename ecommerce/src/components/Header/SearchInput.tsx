import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import useProductQueryStore from "../../store"
import { useRef } from "react"


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
    const setSearchText =  useProductQueryStore(s => s.setSearchText)
    const navigate = useNavigate()

  return (
    <form style={{width: '100%'}} onSubmit={(event)=> {
      event.preventDefault();
      if (ref.current) {
        setSearchText(ref.current.value)
      }
  }}>
  <InputGroup>
    <InputLeftAddon as={AiOutlineSearch} />
    <Input ref={ref} type='text' placeholder='Найти товар' borderRadius={20} borderWidth='2px'/>
  </InputGroup>
  </form>
  )
}

export default SearchInput