import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Search, Grid, Image} from 'semantic-ui-react';



const initialState = {isLoading: false, results: [], value: '', result:[]};
const source = [];

axios.get('/products').then(res => {
  const newData = res.data;
  newData.map(product => {
    source.push({
      title: product.name,
      description: product.itemNo,
      size: product.size,
      color: product.color,
      image: product.imageUrls[0],
      price: `${product.currentPrice} $`,
      images: product.imageUrls
    });
  });
});

const HeaderSearch = props =>{
const [state, setState] = useState(initialState)

const handleResultSelect = (event, { result }) => setState({ value: '', result })

const handleSearchChange = (event, { value }) => {
  setState({ isLoading: true, value })

  setTimeout(() => {
    if (value.length < 1) return setState(initialState)

    const re = new RegExp(_.escapeRegExp(value), 'i')
    const isMatch = (result) => re.test(result.title)

    setState({
      isLoading: false,
      results: _.filter(source, isMatch)
    })
  }, 300)
}



const {isLoading, results, value, result} = state;
const resultRenderer = ({ title, image, description, price, color}) => (
  <Link to={{ pathname: `/product/${description}`}}>
    <div className="results transition">
      <div className="result" color="black" style={{textTransform: "capitalize"}}>
        <div className="image">
          <Image src={image} />
        </div>
        <div className="content">
          <div className="title" style={{textTransform: "capitalize"}}>{title} <span className="price">{price}</span></div>
          <div className="title" >{color}</div>
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
            {...props}
            value={value}
          />
        </Grid.Row>
      </Grid>
    );
}

export default HeaderSearch