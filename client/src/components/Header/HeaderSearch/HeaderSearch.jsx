import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Grid, Image } from 'semantic-ui-react';
import { getProductsBySearchPhrases } from '../../../actions/products';

const HeaderSearch = props => {
  const { onSearch, products } = props;

  const initialState = { isLoading: false, results: [], value: '' };
  const [state, setState] = useState(initialState);
  const [source, setSource] = useState([]);
  const [phrase, setPhrase] = useState('');
  const arrSearcher = () => {
    const re = new RegExp(_.escapeRegExp(phrase), 'i');
    const isMatch = result => re.test(result.title);
    setState({ isLoading: false, results: _.filter(source, isMatch) });
  };

  useEffect(() => {
    if (phrase) {
      onSearch(phrase);
    }
  }, [onSearch, phrase]);

  useEffect(() => {
    const newData = products;
    newData.map(product => {
      source.push({
        title: product.name,
        description: product.itemNo,
        size: product.size,
        color: product.color,
        image: product.imageUrls[0],
        price: `${product.currentPrice} $`,
        prevprice: product.previousPrice,
        images: product.imageUrls,
        desc: product.description,
        brand: product.brand
      });
    });
    setSource(newData);
    arrSearcher();
  }, [products]);

  const handleResultSelect = () => {
    setState({ value: '' });
    setPhrase('');
  };

  const handleSearchChange = (event, { value }) => {
    setState({ isLoading: true, value });
    setPhrase(value);

    if (value.length < 1) return setState(initialState);
>>>>>>> redux
  };

  const { isLoading, results, value } = state;

  const resultRenderer = ({
    title,
    image,
    description,
    price,
    color,
    images,
    brand,
    desc,
    prevprice
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
          color,
          image,
          images
        }
      }}
    >
      <div className="results transition">
        <div className="result" color="black" style={{ textTransform: 'capitalize' }}>
          <div className="image">
            <Image src={`../../${image}`} />
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
    <Grid>
      <Grid.Row centered>
        <Search
          resultRenderer={resultRenderer}
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          // {...props}
          value={value}
        />
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => ({
  products: state.productsBySearch.products
});

const mapDispatchToProps = dispatch => ({
  onSearch: phrases => {
    dispatch(getProductsBySearchPhrases(phrases));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSearch);
