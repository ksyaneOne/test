import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button } from "semantic-ui-react";
import { ImageContainer, BlackLine } from "./productListStyle";

const ProductCard = ({ props }) => {
  const product = props;

  return (
    <Card>
      <Card.Content>
        <Link to={{ pathname: `/product/${product.itemNo}`, product }}>
          <ImageContainer>
            <img alt={product.name} src={product.imageUrls[0]} />
          </ImageContainer>
        </Link>
        <Card.Header textAlign="left">{product.name}</Card.Header>
        <Card.Header>
{product.currentPrice} $</Card.Header>
        <BlackLine />
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
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

ProductCard.defaultProps = {
  product: {},
};

export default ProductCard;
