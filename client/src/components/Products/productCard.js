import React from "react";
import { Card , Button } from 'semantic-ui-react';
import {ImageContainer , BlackLine} from './productListStyle'

const ProductCard = ( {props} ) => (
  <Card>
    <Card.Content>
      <ImageContainer>
        <img alt={props.name} src={props.imageUrls[0]} />
      </ImageContainer>
      <Card.Header textAlign='left'>{props.brand}</Card.Header>
      <Card.Header>{props.currentPrice}{' '}$</Card.Header>
      <BlackLine/>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="black">
          Add to Card
        </Button>
        <Button secondary>Buy</Button>
      </div>
    </Card.Content>
  </Card>
)

export default ProductCard;
