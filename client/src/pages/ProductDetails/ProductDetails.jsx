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
  ImagesGroup
} from "./style";

// import { maxHeaderSize } from "http";

const ProductDetails = props => {

  const product = props.location.product;

  const { name, description,size, currentPrice, color, imageUrls, itemNo } = product;
 
  const mainImg = '../' + imageUrls[0];

  const [imgUrl, setImgUrl] = useState({imageSrc: mainImg});

  const {imageSrc} = imgUrl;





  return (
    <ProductDetailStyles>
      <Grid doubling>
        <Grid.Row columns={2} verticalAlign='middle'>
          {/* Product gallery */}
          <Grid.Column>
          <MainImageStyle>
          <Image src={imageSrc} size='medium'/>
          </MainImageStyle>
            <ImagesGroup>
            <Image.Group size='tiny'>
            {imageUrls.map(oneimg => {
            const newOneImg = '../' + oneimg;
                        return (
                          <Image src={newOneImg} key={newOneImg} onMouseEnter={()=> setImgUrl({imageSrc: newOneImg})}/>
                        );
                      })}
            </Image.Group>
            </ImagesGroup>
          </Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Row columns={2}>
                {/* Product name */}
                <Grid.Column>
                  <Grid><Grid.Row columns={2}>
                    <Grid.Column>
                    <ProductHeaderName>{name}</ProductHeaderName>
                  <ProductArticle>Article: {itemNo}</ProductArticle>
                    </Grid.Column>
                    <Grid.Column>
                  <ProductPrice>{currentPrice} $</ProductPrice>
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
                        <ProductColorCircle style={{backgroundColor: `${color}`}}></ProductColorCircle>
                        <ProductColorName>{color}</ProductColorName>
                        </ProductColor>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  
                  {/* Product size */}
                  <Grid.Row><ProductSizeHeader>Size</ProductSizeHeader></Grid.Row>
                  <Grid>
                    <Grid.Row>
                     <Grid.Column textAlign='center'>
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
              <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <ProductButton>Add to cart</ProductButton>
                    <ProductButton>Buy</ProductButton>
                    </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ProductDetailStyles>
  );
};

export default ProductDetails;
