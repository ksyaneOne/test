import React from 'react';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard';
import WithScroll from '../../CarouselWithScrollbar';
import useFetch from '../../../utils/useFetch';
import carouselSettings from './carouselSettings';

export default function CategoryList() {
  const { loading, data } = useFetch('/catalog', []);
  const categoryElements = data.map(item => (
    <div key={item._id}>
      <Link to={`/catalog/${item.name}`}>
        <CategoryCard category={item} />
      </Link>
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
        <WithScroll elements={categoryElements} carouselSettings={carouselSettings} />
      </Segment>
    </div>
  );
}
