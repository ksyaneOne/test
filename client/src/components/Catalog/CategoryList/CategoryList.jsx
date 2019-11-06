import React from 'react';
import CategoryCard from '../CategoryCard';
import categorys from '../categorys';
import WithScroll from '../../CarouselWithScrollbar';
import carouselSettings from './carouselSettings';

export default function CategoryList() {
  const categoryElements = categorys.map((item, index) => (
    <li key={item._id}>
      <CategoryCard category={item} defaultOpen={index === 0} />
    </li>
  ));
  return (
    <div className="container">
      <WithScroll elements={categoryElements} carouselSettings={carouselSettings} />
    </div>
  );
}
