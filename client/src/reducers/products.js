import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/products';

const initialState = { loading: false, products: [] };
const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_START:
      return { ...state, loading: payload.loading };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload.products, loading: payload.loading };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: payload.err, loading: payload.loading };
    default:
      return { ...state };
  }
};
export default products;
