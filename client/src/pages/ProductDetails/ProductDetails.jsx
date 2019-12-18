import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getProductById } from '../../actions/products';

import { Grid, Image, Divider } from 'semantic-ui-react';

import {
  ProductHeaderName,
  ProductArticle,
  ProductColorHeader,
  ProductColorCircle,
  ProductColorName,
  ProductColor,
  ProductSizeHeader,
  ProductOneSize,
  ProductDetailsHeader,
  ProductDetailsDesc,
  ProductPrice,
  ProductButton,
  ProductDetailStyles,
  MainImageStyle,
  ImagesGroup,
  Images,
  ProductButtons
} from './style';

// import { maxHeaderSize } from "http";

const ProductDetails = props => {
  const [oneProduct, setOneProduct] = useState(props.location.product);

  const { name, description, size, currentPrice, color, imageUrls, itemNo } = oneProduct;
  const [mainImg, setMainImg] = useState('../' + imageUrls[0]);
  const [imgUrl, setImgUrl] = useState({ imageSrc: mainImg });

  const { imageSrc } = imgUrl;

  const { onGetProductById, match, product } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    onGetProductById(id);
  }, [id]);
  console.log(product);

  return (
    <ProductDetailStyles>
      <Grid doubling columns={2}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Images>
              <MainImageStyle>
                <Image src={imageSrc} draggable="false" size="medium" />
              </MainImageStyle>
              <ImagesGroup>
                <Image.Group size="tiny">
                  {/* Product gallery */}
                  {imageUrls.map(oneimg => {
                    const newOneImg = '../' + oneimg;
                    return (
                      <Image
                        draggable="false"
                        src={newOneImg}
                        key={newOneImg}
                        onMouseEnter={() => setImgUrl({ imageSrc: newOneImg })}
                      />
                    );
                  })}
                </Image.Group>
              </ImagesGroup>
            </Images>
          </Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Row>
                {/* Product name */}
                <Grid.Column>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <ProductHeaderName>{name}</ProductHeaderName>
                        <ProductArticle>Article: {itemNo}</ProductArticle>
                      </Grid.Column>
                      <Grid.Column>
                        <ProductPrice>{currentPrice}</ProductPrice>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {/* Product color */}
                  <Divider />
                  <Grid>
                    <Grid.Row columns={4}>
                      <Grid.Column>
                        <ProductColorHeader>Color</ProductColorHeader>
                        <ProductColor>
                          <ProductColorCircle
                            style={{ backgroundColor: `${color}` }}
                          ></ProductColorCircle>
                          <ProductColorName>{color}</ProductColorName>
                        </ProductColor>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {/* Product size */}
                  <Grid.Row>
                    <ProductSizeHeader>Size</ProductSizeHeader>
                  </Grid.Row>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        {size.map(onesize => {
                          return <ProductOneSize key={onesize}>{onesize}</ProductOneSize>;
                        })}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Divider />
                  {/* Product details */}
                  <Grid.Row>
                    <ProductDetailsHeader>Details</ProductDetailsHeader>
                  </Grid.Row>
                  <Grid.Column>
                    <ProductDetailsDesc>{description}</ProductDetailsDesc>
                  </Grid.Column>
                </Grid.Column>
                {/* Product buttons */}
              </Grid.Row>
              <Grid.Row>
                <ProductButtons>
                  <ProductButton>Add to cart</ProductButton>
                  <ProductButton>Buy Now</ProductButton>
                </ProductButtons>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ProductDetailStyles>
  );
};

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductById: id => {
    dispatch(getProductById(id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
