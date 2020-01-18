import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import Carousel from "../../components/Carousel";
import { getProductById } from "../../actions/products";
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
  ProductButton,
  ProductDetailStyles,
  ProductButtons,
  ImageWrapper,
  carouselSettings,
  ProductPrices,
} from "./style";

const ProductDetails = props => {
  const { onGetProductById, match, product, loading } = props;
  const { params } = match;
  const { id } = params;
  const [arrSrc, setArrSrc] = useState([]);

  useEffect(() => {
    onGetProductById(id);
  }, [onGetProductById, id]);

  useEffect(() => {
    if (product.imageUrls !== undefined) {
      setArrSrc(product.imageUrls);
    }
  }, [product.imageUrls]);

  const elements = arrSrc.map(url => (
    <ImageWrapper key={url}>
      <img alt={product.name} src={`../../${url}`} />
    </ImageWrapper>
  ));

  if (!loading)
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  return (
    <Container>
      <Segment>
        <Header as="h3" block>
          {`${product.categories} ${product.name}`.toUpperCase()}
        </Header>
        <Segment>
          <ProductDetailStyles>
            <Grid doubling columns={2}>
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Carousel
                    elements={elements}
                    carouselSettings={carouselSettings}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Grid>
                    <Grid.Row>
                      {/* Product name */}
                      <Grid.Column>
                        <Grid>
                          <Grid.Row>
                            <ProductButtons>
                              <ProductButton secondary>
                                Add to cart
                              </ProductButton>
                              <ProductButton secondary>Buy Now</ProductButton>
                            </ProductButtons>
                          </Grid.Row>
                          <Grid.Row columns={2}>
                            <Grid.Column>
                              <ProductHeaderName>
                                {product.name}
                              </ProductHeaderName>
                              <ProductArticle>
                                Article: {product.itemNo}
                              </ProductArticle>
                            </Grid.Column>
                            <Grid.Column>
                              <ProductPrices>
                                <div className="prices">
                                  <div className="prices-old">
                                    <span className="price">
                                      {product.previousPrice}
                                    </span>
                                  </div>
                                  <div className="prices-current">
                                    <span className="price">
                                      {product.currentPrice}
                                    </span>
                                    <span className="curency">$</span>
                                  </div>
                                </div>
                              </ProductPrices>
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
                                  style={{
                                    backgroundColor: `${product.color}`,
                                  }}
                                ></ProductColorCircle>
                                <ProductColorName>
                                  {product.color}
                                </ProductColorName>
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
                                return (
                                  <ProductOneSize key={onesize}>
                                    {onesize}
                                  </ProductOneSize>
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
                          <ProductDetailsDesc>
                            {product.description}
                          </ProductDetailsDesc>
                        </Grid.Column>
                      </Grid.Column>
                      {/* Product buttons */}
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ProductDetailStyles>
        </Segment>
      </Segment>
    </Container>
  );
};

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading,
});

const mapDispatchToProps = dispatch => ({
  onGetProductById: id => {
    dispatch(getProductById(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
