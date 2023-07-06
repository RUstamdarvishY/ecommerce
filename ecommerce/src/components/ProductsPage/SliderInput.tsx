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
import { useEffect, useState } from "react";
import useProductQueryStore from "../../productStore";
import useProducts from "../../hooks/useProducts";

const SliderInput = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);
  const { data } = useProducts();

  const [maxPrice, setMaxPrice] = useState(1000)
  const [minPrice, setMinPrice] = useState(0)

  useEffect(() => {
    const products = data?.filter((p) => p.collection === categoryId);
    const prices = products?.map((p) => p.wholesale_price);

    if (prices) {
      setMaxPrice(Math.max(...prices));
      setMinPrice(Math.min(...prices));
    }
  }, [data, categoryId])
  

  const [sliderValue, setSliderValue] = useState([minPrice, maxPrice]);

  const setPriceRange = useProductQueryStore((s) => s.setPriceRange);

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
        defaultValue={[minPrice, maxPrice]}
        onChange={(val) => setSliderValue(val)}
        onChangeEnd={(val) =>
          setPriceRange({
            wholesale_price__gt: val[0],
            wholesale_price__lt: val[1],
          })
        }
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
