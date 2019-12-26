import React from "react";
import { Div } from "./CartItemSyle";

const CartItem = props => {
  const {
    currentPrice,
    color,
    sizes,
    brand,
    _id,
    imageUrls,
    addToBasket,
  } = props;

  return (
    <Div>
      <Img />
    </Div>
  );
};
export default CartItem;
