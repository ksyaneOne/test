import React from 'react';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProductCart from '../ProductCard';
import useFetch from '../../../utils/useFetch';
import WithScroll from '../../CarouselWithScrollbar';
import carouselSettings from './carouselSettings';

const ProductList = () => {
  const { loading, data } = useFetch('/products', []);

  const productElements = data.map(item => (
    <div key={item._id}>
      <Link to={{ pathname: `/product/${item.itemNo}`, product: item }}>
        <ProductCart product={item} />
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
        <Header>Горячие новинки и хиты продаж</Header>
        <WithScroll elements={productElements} carouselSettings={carouselSettings} />
      </Segment>
    </div>
  );
};
export default ProductList;
