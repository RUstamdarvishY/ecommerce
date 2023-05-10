import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"



interface Props{
    children: ReactNode
}

const PanelContainer = ({children}: Props) => {
  return (
    <Box marginTop='-100px' borderRadius={10} overflow='hidden' width='700px' height='700px'>{children}</Box>
  )
}

export default PanelContainer