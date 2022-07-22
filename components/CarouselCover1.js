import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GreatWeapon from "../asset/GreatWeapon.jpg";
import Lordhelpme from "../asset/Lordhelpme.jpg";
import KeepOn from "../asset/KeepOn.jpg";
import Faithnav from "../asset/FaithNavigate.jpg";
import RockFaith from "../asset/RockFaith.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className="flex-auto h-full object-fit"
    src={RockFaith.src}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="flex-auto h-full object-fi"
    src={Lordhelpme.src}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img className="flex-auto h-full object-fi" src={KeepOn.src} />,
  <img className="flex-auto h-full object-fi" src={GreatWeapon.src} />,
  <img Classname="flex-auto h-full object-fi" src={Faithnav.src} />,
];

const Carousel1 = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={25000}
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
