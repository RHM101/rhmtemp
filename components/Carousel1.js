import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Wod from "../asset/WodThursday.jpg";
import iw070822 from "../asset/iw070822.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className=" flex-auto h-full object-fit"
    src={Wod.src}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className=" flex-auto h-full object-fit"
    src={iw070822.src}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Carousel1 = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={10000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
  />
);
export default Carousel1;
