import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
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
    loadingByFilter,
    loadingAllProducts
  } = props;

  const { params, path, url } = match;
  const { id } = params;
  const initialState = [];
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [typeOfProducts, setTypeOfProducts] = useState('');

  useEffect(() => {
    switch (path) {
      case '/products':
        setTypeOfProducts('All products');
        onGetAllProducts();
        break;
      case '/categories/:id':
        setTypeOfProducts(`CATEGORIES ${id}`);
        onGetProductsByFilter(`categories=${id}`);
        break;
      default:
        setProducts([]);
    }
  }, [url, onGetAllProducts, onGetProductsByFilter, id, path]);

  useEffect(() => {
    if (allProducts && path === '/products') {
      setProducts(allProducts);
    }
  }, [allProducts, path]);

  useEffect(() => {
    if (productsByQuery !== undefined && path === '/categories/:id') {
      setProducts(productsByQuery);
    }
  }, [productsByQuery, path]);

  useEffect(() => {
    setLoading(loadingByFilter);
  }, [loadingByFilter]);

  useEffect(() => {
    setLoading(loadingAllProducts);
  }, [loadingAllProducts]);

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
        <Loader />
      </Dimmer>
    );
  return (
    <div className="container">
      <Segment>
        <Header as="h3" block>
          {typeOfProducts.toUpperCase()}
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
  loadingByFilter: state.productsByFilter.loading,
  loadingAllProducts: state.products.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  },
  onGetAllProducts: () => {
    dispatch(getProducts());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
