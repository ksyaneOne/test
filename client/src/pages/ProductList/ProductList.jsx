import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductsByFilterQuery, getProducts } from '../../actions/products';
import { Segment, Header, Grid } from 'semantic-ui-react';
import ProductCart from '../../components/CarouselNewProducts/ProductCard';

const ProductDetails = props => {
  const {
    onGetProductsByFilter,
    onGetAllProducts,
    match,
    allProducts,
    productsByQuery,
    loading
  } = props;
  const { params, path } = match;
  const { id } = params;
  const initialState = [];
  const [products, setProducts] = useState(initialState);
  console.log(products, 'products');

  console.log(match, 'match');
  useEffect(() => {
    switch (path) {
      case '/products':
        onGetAllProducts();
        break;
      case '/categories/:id':
        onGetProductsByFilter(`categories=${id}`);
        break;
      default:
        setProducts(initialState);
    }
  }, [path]);

  useEffect(() => {
    console.log(allProducts);
    if (allProducts !== undefined) {
      setProducts();
    }
  }, [allProducts]);

  useEffect(() => {
    console.log(productsByQuery);
    if (productsByQuery !== undefined) {
      setProducts(productsByQuery);
    }
  }, [productsByQuery]);

  const productElements = products.map(item => (
    <div key={item._id}>
      <Grid.Column>
        <ProductCart product={item} />
      </Grid.Column>
    </div>
  ));
  if (!loading) return <div>loading</div>;
  return (
    <div className="container">
      <Segment>
        <Header as="h3" block>
          {`CATEGORIES ${id}`.toUpperCase()}
        </Header>
        <Segment>
          <Grid container columns={3} centered>
            {productElements}
          </Grid>
        </Segment>
      </Segment>
    </div>
  );
};

const mapStateToProps = state => ({
  productsByQuery: state.productsByFilter.products.products,
  allProducts: state.products.products,
  loading: state.productsByFilter.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  },
  onGetAllProducts: () => {
    dispatch(getProducts());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
