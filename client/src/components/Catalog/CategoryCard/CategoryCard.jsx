import React from 'react';
import { Card } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ImgWrapper from './imgWrapper';
import CardWrapper from './cardWrapper';

function CategoryCard(props) {
  const { category } = props;
  return (
    <CardWrapper>
      <Card>
        <ImgWrapper>
          <img alt={category.name} src={category.imgUrl} />
        </ImgWrapper>
        <Card.Content>
          <Card.Header>{category.name}</Card.Header>
        </Card.Content>
      </Card>
    </CardWrapper>
  );
}
export default CategoryCard;
