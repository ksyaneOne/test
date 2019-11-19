import React from 'react';
import { Card, Button, Label, Segment } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ImgWrapper from './imgWrapper';
import CardWrapper from './cardWrapper';

function CardExampleCard(props) {
  const { product } = props;
  return (
    <CardWrapper>
      <Segment raised>
        <Card>
          <ImgWrapper>
            <img alt={product.name} src={product.imageUrls[0]} />
            <Label color="red" ribbon="right">
              New
            </Label>
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
      </Segment>
    </CardWrapper>
  );
}

export default CardExampleCard;
