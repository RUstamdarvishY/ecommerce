import {Box, Text} from '@chakra-ui/react'
import { Products } from '../../hooks/useProducts';

interface Props{
  results: Products,
}

const InputPopUp = ({results}: Props) => {
  return (
      <Box>
        <Text>{results.title}</Text>
        <Text>{results.description}</Text>
      </Box>
  );
}

export default InputPopUp