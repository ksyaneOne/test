import React from "react";
import { Container } from "semantic-ui-react";
import CarouselSale from "../../components/CarouselSale";
import CarouselNewProduct from "../../components/CarouselNewProducts";
import Catalog from "../../components/Catalog";

export default function Home() {
  return (
    <Container>
      <CarouselSale />
      <CarouselNewProduct />
      <Catalog />
    </Container>
  );
}
