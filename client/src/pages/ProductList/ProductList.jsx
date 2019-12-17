import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductsByFilterQuery } from '../../actions/products';
import { Segment, Header, Grid } from 'semantic-ui-react';
import ProductCart from '../../components/CarouselNewProducts/ProductCard';

const ProductDetails = props => {
  const { onGetProductsByFilter, match, products = [], loading } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    onGetProductsByFilter(`categories=${id}`);
  }, [id]);

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
  products: state.productsByFilter.products.products,
  loading: state.productsByFilter.loading
});

const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
