import React from 'react';
import ProductCart from '../ProductCard';
import products from './products';
import WithScroll from '../../CarouselWithScrollbar';
import carouselSettings from './carouselSettings';

export default function ProductList() {
  const productElements = products.map((item, index) => (
    <li key={item.id}>
      <ProductCart product={item} defaultOpen={index === 0} />
    </li>
  ));
  return (
    <div className="container">
      <WithScroll elements={productElements} carouselSettings={carouselSettings} />
    </div>
  );
}
