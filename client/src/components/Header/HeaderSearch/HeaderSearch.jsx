import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import axios from 'axios';

const initialState = { isLoading: false, results: [], value: '' };

const source = [];

axios.get('/products').then(res => {
  const newData = res.data;
  newData.map(product => {
    source.push({
      title: product.name,
      description: product.itemNo,
      image: product.imageUrls[0],
      price: `${product.currentPrice} $`
    });
  });
});

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => (window.location = `/products/${result.description}`);

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Row centered>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Row>
      </Grid>
    );
  }
}
