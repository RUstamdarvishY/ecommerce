import { Checkbox, Text, VStack } from "@chakra-ui/react";
import Options from "../entities/Options";

interface Options {
  id: number;
  label: string;
  filter: string[];
}


interface Props {
  options: Options[];
}

const CheckBoxInput = ({ options }: Props) => {
  return (
    <>
      {options.map((option) => (
        <VStack marginY={3} key={option.id}>
          <Text>{option.label}</Text>
          {option.filter.map((f) => (
            <Checkbox spacing={2} key={f}>
              {f}
            </Checkbox>
          ))}
        </VStack>
      ))}
    </>
  );
};

export default CheckBoxInput;
