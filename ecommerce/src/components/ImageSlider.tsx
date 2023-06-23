import {
  Box,
  Center,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Slides {
  id: number;
  src: string;
  title: string;
}

interface Props {
  slides: Slides[];
  speed: number;
}

const ImageSlider = ({ slides, speed }: Props) => {
  const timerRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevios = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);


  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [goToNext, speed]);

  return (
    <Box
      width="100%"
      height="90%"
      backgroundImage={slides[currentIndex].src}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      borderRadius={5}
      zIndex="-1"
    >
      <IconButton
        position="absolute"
        top="50%"
        right="-5%"
        aria-label="previos"
        zIndex="0"
        as={BsArrowRight}
        onClick={goToNext}
      ></IconButton>
      <IconButton
        position="absolute"
        top="50%"
        left="-5%"
        aria-label="next"
        zIndex="0"
        as={BsArrowLeft}
        onClick={goToPrevios}
      ></IconButton>
      <Center>
        <Text position="absolute" top="105%">
          {slides[currentIndex].title}
        </Text>
      </Center>
      <UnorderedList
        display="flex"
        justifyContent="center"
        position="absolute"
        top="90%"
        left="46%"
      >
        {slides.map((slide) => (
          <ListItem
            key={slide.id}
            margin="10px"
            fontSize="24px"
            color="white"
            // onClick={setCurrentIndex(slide.id)}
          ></ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ImageSlider;
