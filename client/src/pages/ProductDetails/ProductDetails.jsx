<<<<<<< HEAD
import React, {useState, useEffect} from "react";

import { Grid, Image, Divider } from "semantic-ui-react";


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
} from "./style";

// import { maxHeaderSize } from "http";

const ProductDetails = props => {

 const [oneProduct, setOneProduct] = useState(props.location.product);
  
  const { name, description, size, currentPrice, color, imageUrls, itemNo } = oneProduct;
  const [mainImg, setMainImg] = useState('../' + imageUrls[0])
  const [imgUrl, setImgUrl] = useState({imageSrc: mainImg});

  const {imageSrc} = imgUrl;
  
  useEffect(()=>{setOneProduct(props.location.product)})

  return (
    <ProductDetailStyles>
  <Grid doubling columns={2}>
    <Grid.Row verticalAlign="middle">
      <Grid.Column>
        <Images>
          <MainImageStyle>
            <Image src={imageSrc} draggable='false' size="medium" />
          </MainImageStyle>
          <ImagesGroup >
            <Image.Group size="tiny">
              {/* Product gallery */}
              {imageUrls.map(oneimg => {
                const newOneImg = "../" + oneimg;
                return (
                  <Image draggable='false'
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
        <Grid >
          <Grid.Row >
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
                  <Grid.Column >
                    {size.map(onesize => {
                      return (
                        <ProductOneSize key={onesize}>{onesize}</ProductOneSize>
                      );
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

export default ProductDetails;
=======
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Divider } from 'semantic-ui-react';
import { getProductById } from '../../actions/products';
import Slider from '../../components/Carousel';
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
import Carousel from 'react-multi-carousel';

// import { maxHeaderSize } from "http";

const ProductDetails = props => {
  const { onGetProductById, match, product, loading } = props;
  const { params } = match;
  const { id } = params;
  const [arrSrc, setArrSrc] = useState([]);

  useEffect(() => {
    onGetProductById(id);
    setArrSrc(product.imageUrls);
  }, [id]);
  console.log(product);
  if (!loading) return <div>loading</div>;
  return (
    <ProductDetailStyles>
      <Grid doubling columns={2}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Row>
                {/* Product name */}
                <Grid.Column>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <ProductHeaderName>{product.name}</ProductHeaderName>
                        <ProductArticle>Article: {product.itemNo}</ProductArticle>
                      </Grid.Column>
                      <Grid.Column>
                        <ProductPrice>{product.currentPrice}</ProductPrice>
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
                            style={{ backgroundColor: `${product.color}` }}
                          ></ProductColorCircle>
                          <ProductColorName>{product.color}</ProductColorName>
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
                        {product.size.map(onesize => {
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
                    <ProductDetailsDesc>{product.description}</ProductDetailsDesc>
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
>>>>>>> redux
