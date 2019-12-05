import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../actions/products';

const ProductDetails = props => {
  const { onGetProductById, match, product } = props;
  const { params } = match;
  const { id } = params;

  console.log(props);

  useEffect(() => {
    onGetProductById(id);
  }, [id]);

  return (
    <>
      <h1>{product.name}</h1>
      <h2>brand: {product.brand}</h2>
    </>
  );
};

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductById: id => {
    dispatch(getProductById(id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
