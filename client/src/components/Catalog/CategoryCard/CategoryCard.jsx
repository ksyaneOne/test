import React from 'react';
import { Card } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ImgWrapper from './style';

function CategoryCard(props) {
  const { category } = props;
  return (
    <Card>
      <ImgWrapper>
        <img alt={category.name} src={category.imgUrl} />
      </ImgWrapper>
      <Card.Content>
        <Card.Header>{category.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
export default CategoryCard;
