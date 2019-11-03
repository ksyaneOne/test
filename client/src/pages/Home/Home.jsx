import React from 'react';
import {css} from 'emotion';
import CarouselSale from './../../components/CarouselSale';
import CarouselNewProduct from '../../components/CarouselNewProducts';


export default function Home(){
    return (
        <>
            <CarouselSale />
            <CarouselNewProduct />
        </>
    );
}
