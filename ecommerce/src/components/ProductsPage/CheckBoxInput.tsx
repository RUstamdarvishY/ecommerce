import { Checkbox, Text, VStack } from "@chakra-ui/react";
import Options from "../entities/Options";

interface Props {
  options: Options[];
}

const CheckBoxInput = ({ options }: Props) => {
  return (
    <>
      {options.map((option) => (
        <VStack marginY={3}>
          <Text>{option.label}</Text>
          {option.filter.map((f) => (
            <Checkbox key={option.id} spacing={2}>
              {f}
            </Checkbox>
          ))}
        </VStack>
      ))}
    </>
  );
};

export default CheckBoxInput;
