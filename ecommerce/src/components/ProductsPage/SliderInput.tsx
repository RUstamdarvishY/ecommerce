import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Box,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const SliderInput = () => {
  const [sliderValue, setSliderValue] = useState([0, 100]);

  return (
    <>
      <Text fontWeight="bold" textAlign="left" paddingBottom={2}>
        Цена
      </Text>
      <HStack marginBottom={7}>
        <Input placeholder={sliderValue[0].toString()} size="xs" />
        <Input placeholder={sliderValue[1].toString()} size="xs" />
      </HStack>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 100]}
        onChange={(val) => setSliderValue(val)}
      >
        <RangeSliderMark
          value={sliderValue[0]}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue[0]}р.
        </RangeSliderMark>
        <RangeSliderMark
          value={sliderValue[1]}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue[1]}р.
        </RangeSliderMark>
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Box color="tomato" />
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Box color="tomato" />
        </RangeSliderThumb>
      </RangeSlider>
    </>
  );
};

export default SliderInput;
