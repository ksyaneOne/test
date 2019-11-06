import React, { useState } from 'react';
import style from './style';

const initialState = {
  color: 'red',
  size: 40,
  count: 1,
  name: '',
  ID: '',
  desctiption: '',
  price: 25,
  category: 'category where product is shown',
  images: [],
};
const [state, setState] = useState(initialState);

const ProductDetails = () => (
  <div className="container" />
);
