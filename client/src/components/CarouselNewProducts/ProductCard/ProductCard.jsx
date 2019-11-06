import React from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';

function CardExampleCard(props) {
  const { product } = props;
  return (
    <Card>
      <div style={{ position: 'relative', overflow: 'hiden', height: '240px' }}>
        <img
          alt={product.name}
          src={product.imageUrls[0]}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '200px',
            height: '200px',
            'object-fit': 'cover',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two">
          <Label color="red">{product.previousPrice}$</Label>
          <Button basic color="red">
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default CardExampleCard;
