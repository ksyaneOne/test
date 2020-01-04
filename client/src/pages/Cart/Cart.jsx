import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem";
import { CartItemsWraper, Container } from "./CartStyle";
import CartSummery from "../../components/CartSummary";

const Cart = ({ products }) => {
  const cartItems = products.map(product => (
    <CartItem {...product} key={product.id} />
  ));

  return (
    <Container>
      <CartItemsWraper>{cartItems}</CartItemsWraper>
      <CartSummery />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    products: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
