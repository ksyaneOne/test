import React from 'react';
import Carousel from './../Carousel'
import carouselSettings from './carouselSettings'
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CarouselSale = () => {
	const elements = [
		<Image key={111} src="https://motokvartal.com.ua/content/images/10/79953593975151.webp" />,
		<Image key={211} src="https://motokvartal.com.ua/content/images/50/72104498619834.webp" />,
		<Image key={311} src="https://motokvartal.com.ua/content/images/41/12681968534177.jpg" />
	]
	return (
		<Carousel elements={elements} carouselSettings={carouselSettings}/>
	)

}
export default CarouselSale;

