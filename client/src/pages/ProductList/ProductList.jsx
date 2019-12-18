<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsByFilterQuery } from '../../actions/products';
import { Segment, Header, Grid } from 'semantic-ui-react';
import ProductCart from '../../components/CarouselNewProducts/ProductCard';

const ProductDetails = props => {
  const { onGetProductsByFilter, match, products = [], loading } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    onGetProductsByFilter(`categories=${id}`);
  }, [id]);

  const productElements = products.map(item => (
    <div key={item._id}>
      <Grid.Column>
        <ProductCart product={item} />
      </Grid.Column>
    </div>
  ));
  if (!loading) return <div>loading</div>;
  return (
    <div className="container">
      <Segment>
        <Header as="h3" block>
          {`CATEGORIES ${id}`.toUpperCase()}
        </Header>
        <Segment>
          <Grid container columns={3} centered>
            {productElements}
          </Grid>
        </Segment>
      </Segment>
    </div>
  );
>>>>>>> redux
};

const mapStateToProps = state => ({
  products: state.productsByFilter.products.products,
  loading: state.productsByFilter.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
