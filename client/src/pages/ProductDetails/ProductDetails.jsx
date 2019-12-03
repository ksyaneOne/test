import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductById } from './../../actions/products';
const ProductDetails = props => {
  console.log(props, 'props PD');
  // useEffect(getProductById, [onGetProduct]);
  return <h1>dg</h1>;
};

const mapStateToProps = state => ({
  products: state.product.products,
  loading: state.product.loading
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
