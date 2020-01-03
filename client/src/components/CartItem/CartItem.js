import React, { useState } from "react";
import Carousel from "../Carousel";

import {
  Wrapper,
  Img,
  ItemParams,
  Param,
  TitelItem,
  DeleteItem,
  TotalPrice,
  carouselSettings,
  Operator,
} from "./SyleCartItem";

const CartItem = props => {
  const { name, color, brand, size, currentPrice, itemNo } = props;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(currentPrice);
  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <Wrapper>
      {/* <Carousel elements={elements} carouselSettings={carouselSettings} /> */}
      <Img src="static/img/products/helmets/AIROH_Aviator_2.2/001.png" />
      <ItemParams>
        <TitelItem>{name.toUpperCase()}</TitelItem>
        <Param>
          Code REF:
          {itemNo}
        </Param>
        <Param>
          Color:
          {color}
        </Param>
        <Param>
          Size:
          {size}
        </Param>
        <Param>
          Quantity: <Operator onClick={decQuantity}>-</Operator> {quantity}
{" "}
          <Operator onClick={incQuantity}>+</Operator>
        </Param>
        <Param>Price:{price}$</Param>
        <TotalPrice>Total:{quantity * price}$</TotalPrice>
      </ItemParams>
      <DeleteItem>Remove from basket</DeleteItem>
    </Wrapper>
  );
};
export default CartItem;
