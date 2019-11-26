import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoryCard from '../CategoryCard';
import WithScroll from '../../CarouselWithScrollbar';
import carouselSettings from './carouselSettings';
import getCategory from '../../../actions/category';

const CategoryList = props => {
  const { loading, categories, onGetCategory } = props;
  useEffect(onGetCategory, [onGetCategory]);

  const categoryElements = categories.map(item => (
    <div key={item._id}>
      <Link to={`/catalog/${item.name}`}>
        <CategoryCard category={item} />
      </Link>
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
        <Header>Категории</Header>
        <WithScroll elements={categoryElements} carouselSettings={carouselSettings} />
      </Segment>
    </div>
  );
};

CategoryList.propTypes = {
  onGetCategory: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object)
};

CategoryList.defaultProps = {
  categories: [],
  onGetCategory: {}
};

const mapStateToProps = state => ({
  categories: state.catalog.categories,
  loading: state.catalog.loading
});

const mapDispatchToProps = dispatch => ({
  onGetCategory: () => {
    dispatch(getCategory());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
