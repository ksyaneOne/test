import React from "react";
import {
  Container,
  Title,
  Content,
  OrderValue,
  Delivery,
  Total,
  Button,
} from "./StyleCartSummary";

const CartSummary = ({ totalPrice }) => {
  return (
    <>
      <Container>
        <Title>SHOPPING BAG TOTAL</Title>
        <Content>
          <OrderValue>
            ORDER VALUE:
            <span>{totalPrice}$</span>
          </OrderValue>
          <Delivery>
            DELIVERY
            <span>FREE</span>
          </Delivery>
          <Total>
            TOTAL <span>{totalPrice}$</span>
          </Total>
          <Button>CHECKOUT</Button>
        </Content>
      </Container>
    </>
  );
};
export default CartSummary;
