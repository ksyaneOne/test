import React from 'react';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import CategoryCard from '../CategoryCard';
import WithScroll from '../../CarouselWithScrollbar';
import useFetch from '../../../utils/useFetch';
import carouselSettings from './carouselSettings';

export default function CategoryList() {
  const { loading, data } = useFetch('http://localhost:5000/catalog', []);
  const productElements = data.map(item => (
    <div key={item._id}>
      <CategoryCard category={item} />
    </div>
  ));
  if (loading)
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  return (
    <div className="container">
      <Segment>
        <Header>Категории</Header>
        <WithScroll elements={productElements} carouselSettings={carouselSettings} />
      </Segment>
    </div>
  );
}
