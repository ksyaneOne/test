import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const  CarouselSale  = () => {
	let  elements  = [
		{
			render:()=>{
				return (
                    <>
                        <Image src="https://motokvartal.com.ua/content/images/10/79953593975151.webp"/>
                    </>
                );
			}
		},
		{
			render:()=>{
				return (
                    <>
                        <Image src="https://motokvartal.com.ua/content/images/50/72104498619834.webp"/>
                    </>
                );
			}
	    },
		{
			render:()=>{
				return (
                    <>
                        <Image src="https://motokvartal.com.ua/content/images/41/12681968534177.jpg"/>
                    </>
                );
			}
	    }
	]
	return (
		<div style={{wight:500}}>
			<Carousel
				elements  =  {  elements  }
				duration  ={5000}
				animation  ='zoom'
				showNextPrev  =  {false}
				showIndicators  = {true}
			/>
		</div>
	)

}
export  default  CarouselSale;