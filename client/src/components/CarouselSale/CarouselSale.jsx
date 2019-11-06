import React from 'react';
import { Image } from 'semantic-ui-react';
import Carousel from '../Carousel';
import carouselSettings from './carouselSettings';
import 'semantic-ui-css/semantic.min.css';

const CarouselSale = () => {
  const elements = [
    <Image key={111} src="https://motokvartal.com.ua/content/images/10/79953593975151.webp" />,
    <Image key={211} src="https://motokvartal.com.ua/content/images/50/72104498619834.webp" />,
    <Image key={311} src="https://motokvartal.com.ua/content/images/41/12681968534177.jpg" />
  ];
  return (
    <div>
      <Carousel elements={elements} carouselSettings={carouselSettings} />
    </div>
  );
};
export default CarouselSale;
