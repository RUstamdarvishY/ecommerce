import { Card, CardBody } from "@chakra-ui/react";
import ImageSlider from "../ImageSlider";

const PanelCardSlider = () => {
  const slides = [
    {
      id: 0,
      src: "https://images.pexels.com/photos/5202162/pexels-photo-5202162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "apple",
    },
    {
      id: 1,
      src: "https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "watermelon",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "pizza",
    },
  ];

  return (
    <Card zIndex="-2" width='700px' height='485px' margin='10 auto'>
      <CardBody>
        <ImageSlider slides={slides} speed={4000} />
      </CardBody>
    </Card>
  );
};

export default PanelCardSlider;
