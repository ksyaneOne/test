import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Label, Segment, Icon } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ImgWrapper from './imgWrapper';
import CardWrapper from './cardWrapper';

const NewProduct = props => {
  const { product } = props;
  return (
    <CardWrapper>
      <Segment raised>
        <Card>
          <Link to={{ pathname: `/product/${product.itemNo}`, product: product }}>
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
          </Link>
          <Card.Content>
            <div>
              <Button>
                <Icon name="like"></Icon>
              </Button>
              <Button>
                <Icon name="shopping cart"></Icon>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Segment>
    </CardWrapper>
  );
};

export default NewProduct;
