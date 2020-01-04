import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import { CardHeader, CardWrapper, ImageWrapper } from "./style";

const CategoryCard = props => {
  const { category } = props;

  return (
    <CardWrapper>
      <Card>
        <ImageWrapper>
          <img alt={category.name} src={category.imgUrl} />
        </ImageWrapper>
        <Card.Content>
          <CardHeader>{category.name}</CardHeader>
        </Card.Content>
      </Card>
    </CardWrapper>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};
CategoryCard.defaultProps = {
  category: {},
};

export default CategoryCard;
