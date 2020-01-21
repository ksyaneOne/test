import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem";
import { CartItemsWraper, Container } from "./CartStyle";
import CartSummery from "../../components/CartSummary";

const Cart = ({ products, totalPrice }) => {
  const cartItems = products.map(product => (
    <CartItem {...product} key={product.id} />
  ));

  return (
    <Container>
      <CartItemsWraper>{cartItems}</CartItemsWraper>
      <CartSummery totalPrice={totalPrice} />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    products: state.cart.products,
    totalPrice: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
