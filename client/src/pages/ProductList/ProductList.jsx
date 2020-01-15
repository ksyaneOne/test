import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeFilterQuery } from "../../actions/filterProducts";
import {
  getProductsByFilterQuery,
  getProducts,
  getMoreProducts,
} from "../../actions/products";
import {
  Segment,
  Header,
  Grid,
  Button,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { BtnWrapper } from "./style";
import ProductCart from "../../components/CarouselNewProducts/ProductCard";
import ModalFilter from "../../components/ModalFIlter";
const ProductDetails = props => {
  const {
    onGetProductsByFilter,
    onGetMoreProducts,
    match,
    productsByQuery,
    moreProducts,
    loadingByFilter,
    loadingMoreProducts,
    onChangeFilterQuery,
  } = props;

  const { params, path } = match;
  const { id } = params;
  const initialState = [];
  const [prevProducts, setPrevProducts] = useState(initialState);
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [typeOfProducts, setTypeOfProducts] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  const [lastItem, setLastItem] = useState("");
  const [isShownBtn, setIsShownBtn] = useState(false);
  const [quantityProducts, setQuantityProducts] = useState(3);

  useEffect(() => {
    switch (path) {
      case "/products":
        setTypeOfProducts("All products");
        setPrevProducts([]);
        setProducts([]);
        onGetMoreProducts(quantityProducts, "");
        break;
      case "/categories/:id":
        setTypeOfProducts(`CATEGORIES ${id}`);
        setIsShownBtn(false);
        onChangeFilterQuery(`categories=${id}&`);
        onGetProductsByFilter(`categories=${id}`);
        break;
      default:
        setProducts([]);
    }
  }, [id, path]);

  useEffect(() => {
    setPrevProducts(products);
    onGetMoreProducts(quantityProducts, lastItem);
  }, [lastItem]);

  useEffect(() => {
    if (moreProducts && path === "/products") {
      setProducts([].concat(prevProducts, moreProducts));
    }
  }, [moreProducts]);

  useEffect(() => {
    if (path === "/products") {
      if (moreProducts.length === 0 && products.length !== quantityProducts) {
        setIsShownBtn(false);
      } else {
        setIsShownBtn(true);
      }
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  }, [products]);

  useEffect(() => {
    if (productsByQuery !== undefined && path === "/categories/:id") {
      setProducts(productsByQuery);
    }
  }, [productsByQuery, path]);

  useEffect(() => {
    setLoading(loadingByFilter);
  }, [loadingByFilter]);

  useEffect(() => {
    setLoading(loadingMoreProducts);
  }, [loadingMoreProducts]);

  const loadMoreClick = () => {
    if (moreProducts.length > 0) {
      let curentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      let id = moreProducts.slice(-1)[0]._id;

      setScrollTop(curentScroll);
      setLastItem(id);
    }
  };

  const productElements = products.map(item => (
    <div key={item._id}>
      <Grid.Column>
        <ProductCart product={item} />
      </Grid.Column>
    </div>
  ));
  if (!loading)
    return (
      <Dimmer active>
        <Loader indeterminate>loading...</Loader>
      </Dimmer>
    );
  return (
    <Container>
      <Segment>
        <Header as="h3" block>
          <Grid>
            <Grid.Column floated="left" width={5}>
              {typeOfProducts.toUpperCase()}
            </Grid.Column>
            <Grid.Column floated="right" textAlign={"right"} width={5}>
              <ModalFilter />
            </Grid.Column>
          </Grid>
        </Header>

        <Segment>
          <Grid container columns={3} centered>
            {productElements}
          </Grid>
          <Grid centered>
            {isShownBtn ? (
              <BtnWrapper>
                <Button
                  onClick={loadMoreClick}
                  content="Load more..."
                  secondary
                />
              </BtnWrapper>
            ) : (
              ""
            )}
          </Grid>
        </Segment>
      </Segment>
    </Container>
  );
};

const mapStateToProps = state => ({
  productsByQuery: state.productsByFilter.products.products,
  allProducts: state.products.products,
  moreProducts: state.productsMore.products,
  loadingByFilter: state.productsByFilter.loading,
  loadingAllProducts: state.products.loading,
  loadingMoreProducts: state.productsMore.loading,
});

const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  },
  onGetAllProducts: () => {
    dispatch(getProducts());
  },
  onGetMoreProducts: (limit, lastProduct) => {
    dispatch(getMoreProducts(limit, lastProduct));
  },
  onChangeFilterQuery: queryString => dispatch(changeFilterQuery(queryString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
