import React from 'react';
import { Card } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';

function CategoryCard(props) {
  const { category } = props;
  return (
    <Card>
      <div style={{ position: 'relative', overflow: 'hiden', height: '240px' }}>
        <img
          alt={category.name}
          src={category.imgUrl}
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
        <Card.Header>{category.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
export default CategoryCard;
