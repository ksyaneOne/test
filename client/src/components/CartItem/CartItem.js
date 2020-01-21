import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Select } from "semantic-ui-react";
import setTotalPrice from "../../actions/cart/setTotalPrice";
import removeFromBasket from "../../actions/cart/removeFromBasket";

import {
  Wrapper,
  Img,
  ItemParams,
  Param,
  TitelItem,
  DeleteItem,
  TotalPrice,
  Operator,
} from "./styleCartItem";

const CartItem = props => {
  const {
    name,
    color,
    brand,
    size,
    currentPrice,
    itemNo,
    setTotalPriceInState,
    imageUrls,
    removeFromCart,
  } = props;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(currentPrice);
  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const [arrSrc, setArrSrc] = useState([]);
  useEffect(() => {
    if (imageUrls !== undefined) {
      setArrSrc(imageUrls);
    }
  }, [imageUrls]);
  useEffect(() => {
    setTotalPriceInState(quantity, itemNo);
  }, [quantity]);

  const totalPrice = +(quantity * currentPrice).toFixed(2);

  const sizeList = size.map(item => ({ key: item, value: item, text: item }));
  const SelectExample = () => <Select placeholder="Select size" options={sizeList} />;

  return (
    <Wrapper>
      <Img src={`../../${imageUrls[0]}`} />
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
          {SelectExample()}
        </Param>
        <Param>
          Quantity: <Operator onClick={decQuantity}>-</Operator> {quantity}
{" "}
          <Operator onClick={incQuantity}>+</Operator>
        </Param>
        <Param>
          Price:
          {price}$
        </Param>
        <TotalPrice>
          Total:
          {totalPrice}$
        </TotalPrice>
      </ItemParams>
      <DeleteItem onClick={() => removeFromCart(itemNo)}>Remove from basket</DeleteItem>
    </Wrapper>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: itemNo => dispatch(removeFromBasket(itemNo)),
    setTotalPriceInState: (quantity, itemNo) => dispatch(setTotalPrice(quantity, itemNo)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
