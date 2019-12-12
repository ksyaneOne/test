import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Grid, Image } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };
const source = [];

const HeaderSearch = props => {

const {products} = props;

useEffect(()=>{
  products.map(product => {
    source.push({
      id: product._id,
      title: product.name,
      description: product.itemNo,
      size: product.size,
      color: product.color,
      image: product.imageUrls[0],
      price: product.currentPrice,
      prevprice: product.previousPrice,
      images: product.imageUrls,
      desc: product.description,
      brand: product.brand
    });
  });
});

  const [state, setState] = useState(initialState);

  const handleResultSelect = (event, { result }) => setState({ value: '' });

  const handleSearchChange = (event, { value }) => {
    setState({ isLoading: true, value });

    setTimeout(() => {
      if (value.length < 1) return setState(initialState);

      const re = new RegExp(_.escapeRegExp(value), 'i');
      const isMatch = result => re.test(result.title);

      setState({
        isLoading: false,
        results: _.filter(source.slice(0, 5), isMatch)
      });
    }, 300);
  };

  const { isLoading, results, value } = state;

  const defaultWindowLocation = window.location.href;

  const resultRenderer = ({
    title,
    image,
    description,
    price,
    color,
    images,
    brand,
    desc,
    prevprice,
    size
  }) => (
    <Link
      to={{
        pathname: `/product/${description}`,
        product: {
          name: title,
          brand,
          description: desc,
          previousPrice: prevprice,
          currentPrice: price,
          itemNo: description,
          color,
          image,
          size,
          imageUrls: images
        }
      }}
    >
      <div className="results transition">
      
        <div className="result" color="black" style={{ textTransform: 'capitalize' }}>
          <div className="image">
            <Image src={window.location.href.includes('product') ? '../' + image  : image} />
          </div>
          <div className="content">
            <div className="title" style={{ textTransform: 'capitalize' }}>
              {title} <span className="price">{price}</span>
            </div>
            <div className="title">{color}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
 
  return (
    <Grid >
      <Grid.Row centered>
        <Search
          resultRenderer={resultRenderer}
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          {...props}
          value={value}
        />
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSearch);
