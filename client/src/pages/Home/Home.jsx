import React from 'react';
import { css } from 'emotion';
import CarouselSale from '../../components/CarouselSale';
import CarouselNewProduct from '../../components/CarouselNewProducts';
import Catalog from '../../components/Catalog';

export default function Home() {
  return (
    <>
      <CarouselSale />
      <CarouselNewProduct />
      <Catalog />
    </>
  );
}
