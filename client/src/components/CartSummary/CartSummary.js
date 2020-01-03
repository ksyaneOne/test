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

const CartSummary = () => {
  return (
    <>
      <Container>
        <Title>SHOPPING BAG TOTAL</Title>
        <Content>
          <OrderValue>
            ORDER VALUE:
            <span>30.99$</span>
          </OrderValue>
          <Delivery>
            DELIVERY
            <span>FREE</span>
          </Delivery>
          <Total>
            TOTAL
            <span>100$</span>
          </Total>
          <Button>CHECKOUT</Button>
        </Content>
      </Container>
    </>
  );
};
export default CartSummary;
