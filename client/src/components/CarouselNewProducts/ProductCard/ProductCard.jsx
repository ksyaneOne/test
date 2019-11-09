import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ImgWrapper from './style';

function CardExampleCard(props) {
  const { product } = props;
  return (
    <Card>
      <ImgWrapper>
        <img alt={product.name} src={product.imageUrls[0]} />
      </ImgWrapper>
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <div>{product.previousPrice}$</div>
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
  );
}

export default CardExampleCard;
