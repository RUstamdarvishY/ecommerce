import {
  Box,
  Center,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  keyframes,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const fadeKeyFrames = keyframes`
  from {opacity: 1}
  50% {opacity: 0}
  to {opacity: 1}
`;

interface Slides {
  id: number;
  src: string;
  title: string;
  alt: string;
}

interface Props {
  slides: Slides[];
  speed: number;
}

const ImageSlider = ({ slides, speed }: Props) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const delayTimer = 1000;

  const timerRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(0);

  const goToPrevios = useCallback(async () => {
    setFade(1);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    await delay(delayTimer);
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToNext = useCallback(async () => {
    setFade(1);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    await delay(delayTimer);
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const setCurrent = async (id: number) => {
    if (id !== currentIndex) {
      setFade(1);
      await delay(delayTimer);
    }
    setCurrentIndex(id);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [goToNext, speed]);

  const getAnimation = () => {
    if (fade === 1) {
      return `${fadeKeyFrames} alternate-reverse running ease-in-out 2s forwards`;
    }
    return undefined;
  };

  return (
    <>
      <Box
        width="100%"
        height="90%"
        backgroundImage={slides[currentIndex].src}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        borderRadius={5}
        zIndex="1"
        onAnimationEnd={() => setFade(0)}
        animation={getAnimation()}
      >
        <IconButton
          position="absolute"
          top="50%"
          right="-5%"
          aria-label="previos"
          zIndex="2"
          as={BsArrowRight}
          onClick={goToNext}
        ></IconButton>
        <IconButton
          position="absolute"
          top="50%"
          left="-5%"
          aria-label="next"
          zIndex="2"
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
              cursor="pointer"
              onClick={() => setCurrent(slide.id)}
            ></ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
};

export default ImageSlider;
