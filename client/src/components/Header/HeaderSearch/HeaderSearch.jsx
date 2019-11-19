import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, Modal, Header, Image, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  modalInfo: {},
  modalOpen: false,
  source: []
};

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
      price: `${product.currentPrice} $`
    });
  });
});

export default class HeaderSearch extends Component {
  state = initialState;

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleResultSelect = (e, { result }) =>
    this.setState(
      {
        modalInfo: {
          name: result.title,
          description: result.description,
          image: result.image,
          price: result.price,
          size: result.size,
          color: result.color
        },
        value: ''
      },
      this.handleOpen
    );

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
    const { isLoading, value, results, modalInfo } = this.state;

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
            {...this.props}
            value={value}
          />
        </Grid.Row>
        <Modal open={this.state.modalOpen} onClose={this.handleClose} size="small" closeIcon>
          <Modal.Header>{modalInfo.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={modalInfo.image} />
            <Modal.Description>
              <p>Product code: {modalInfo.description}</p>
              <p>Color: {modalInfo.color}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Add to cart
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid>
    );
  }
}
