import React from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const ProductDetails = props => {
  const product = props.location.product;

  const { name, description, currentPrice, previousPrice, color, image} = product;
return (
<ProductDetail name={name} description={description}/>

)
}

export default ProductDetails