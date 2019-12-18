import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProductCart from '../ProductCard';
import WithScroll from '../../CarouselWithScrollbar';
import carouselSettings from './carouselSettings';
import getProducts from '../../../actions/products';

const ProductList = props => {
  const { loading, products, onGetProducts } = props;

  useEffect(onGetProducts, [onGetProducts]);

  const productElements = products.map(item => (
    <div key={item._id}>
      <ProductCart product={item} />
    </div>
  ));
  if (!loading)
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
ProductList.propTypes = {
  onGetProducts: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
  products: [],
  onGetProducts: {}
};
const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
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