import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
import catalog from './catalog';
import products from './products';
import cart from './cart'

import { reducer as common } from '../modules/common';

export default combineReducers({
  form,
  notifications,
  common,
  catalog,
  products,
  cart
});
