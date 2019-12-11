import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Label, Segment, Icon } from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import { CardWrapper, ProductName, ProductPrices, ButtonsGrop, ImageWrapper } from './style';

const getSale = (old, current) => {
  const diff = old - current;
  return Math.ceil((diff / old) * 100);
};

const NewProduct = props => {
  const { product } = props;
  const [priceSale, setPriceSale] = useState(0);
  useEffect(() => {
    setPriceSale(getSale(product.previousPrice, product.currentPrice));
  }, [product]);
  return (
    <CardWrapper>
      <Segment raised>
        <Card>
          <Link to={{ pathname: `/product/${product.itemNo}`, product }}>
            <ImageWrapper>
              <img alt={product.name} src={product.imageUrls[0]} />
              <Label color="red" ribbon="right">
                New
              </Label>
            </ImageWrapper>
            <Card.Content>
              <ProductName>{product.name}</ProductName>
            </Card.Content>
            <ProductPrices>
              <div className="sale">
                <span>-{priceSale}%</span>
              </div>
              <div className="prices">
                <div className="prices-old">
                  <span className="price">{product.previousPrice}</span>
                </div>
                <div className="prices-current">
                  <span className="price">{product.currentPrice}</span>
                  <span className="curency">$</span>
                </div>
              </div>
            </ProductPrices>
          </Link>
          <Card.Content>
            <ButtonsGrop>
              <div className="buttons-grop">
                <div className="button-buy">
                  <Icon name="shopping cart" />
                  <span className="title">Buy</span>
                </div>
                <div className="button-like">
                  <Icon name="like" />
                </div>
              </div>
            </ButtonsGrop>
          </Card.Content>
        </Card>
      </Segment>
    </CardWrapper>
  );
};

NewProduct.propTypes = {
  product: PropTypes.object
};

NewProduct.defaultProps = {
  product: {}
};
export default NewProduct;
