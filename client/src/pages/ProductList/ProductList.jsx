import React from 'react';
import { Dimmer, Loader, Card } from 'semantic-ui-react';
import ProductCard from '../../components/Products';
import useFetch from '../../utils/useFetch';
import Container from './ProductListStyle'
export default function ProductList() {
  const { loading, data } = useFetch('/products', [] );
  const products = data.map(p=>(
  <div key={p._id}>
    <ProductCard props={p} />
  </div>
    )
  )
  if (loading)
    return (
  <Dimmer active>
    <Loader />
  </Dimmer>
    );
  return (  
      <Container><Card.Group itemsPerRow={3} centered={true} stackable={true}>{products}</Card.Group></Container>
    )
};
