import React from "react";
import { Card , Image , Button } from 'semantic-ui-react';
import ImageConteiner from './productListStyle'

const ProductCard = ( {props} ) => (
  <Card>
    <Card.Content>
      <ImageConteiner>
        <img alt={props.name} src={props.imageUrls[0]} />
      </ImageConteiner>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
price :
        {props.currentPrice}
        {' '}
$
      </Card.Meta>
      <Card.Description>{props.someOtherFeature}</Card.Description>
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
