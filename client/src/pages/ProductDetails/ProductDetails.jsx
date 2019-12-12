import React from "react";

import { Grid, Image, Button } from "semantic-ui-react";

import ProductDetailStyles from "./style";
// import { maxHeaderSize } from "http";

const ProductDetails = props => {

  const product = props.location.product;

  const { name, description,size, currentPrice, color, imageUrls, itemNo } = product;

  const mainImg = '../' + imageUrls[0];


  return (
    <ProductDetailStyles>
      <Grid doubling>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={mainImg} size='medium' />
          {imageUrls.map(oneimg => {
            const newOneImg = '../' + oneimg;
                        return (
                          <Grid.Column key={newOneImg}><Image src={newOneImg} size='tiny' /></Grid.Column>
                        );
                      })}
          </Grid.Column>
          <Grid.Column>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  {name}
                  <p>Article: {itemNo}</p>
                  {/* Color */}
                  <Grid.Row>Color:</Grid.Row>
                  <Grid>
                    <Grid.Row columns={4}>
                      <Grid.Column>
                        O<p>{color}</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {/* Size */}
                  <Grid.Row>Size:</Grid.Row>

                  <Grid>
                    <Grid.Row columns={size.length}>
                      {size.map(onesize => {
                        return (
                          <Grid.Column key={onesize}>{onesize}</Grid.Column>
                        );
                      })}
                    </Grid.Row>
                  </Grid>
                  {/* Details */}
                  <Grid.Row>Details</Grid.Row>
                  <Grid.Column>{description}</Grid.Column>
                </Grid.Column>
                <Grid.Column>{currentPrice}</Grid.Column>
                {/* Buttons */}
              </Grid.Row>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Button primary>Add to cart</Button>
                    <Button primary>Buy</Button>
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
