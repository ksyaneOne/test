import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Card } from 'semantic-ui-react';
import ProductCard from '../../components/Products';
import Container from './ProductListStyle'
import getProducts from '../../actions/products';

 const ProductList = props => {
 const { loading, products, onGetProducts } = props;
 
 useEffect(onGetProducts, [onGetProducts]);

  const ProductItems = products.map(item =>(

  <div key={item._id}>
    <ProductCard props={item} />
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
      <Container>
        <Card.Group 
        itemsPerRow={3} 
        centered={true} 
        stackable={true}>
          {ProductItems}
        </Card.Group>
      </Container>
    )
};

ProductList.propTypes = {
  onGetProducts: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
  products: [],
  onGetProducts: {}
};

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => {
    dispatch(getProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);