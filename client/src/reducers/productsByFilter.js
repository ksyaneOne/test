import {
  FETCH_PRODUCTS_BY_FILTER_QUERY_START,
  FETCH_PRODUCTS_BY_FILTER_QUERY_SUCCESS,
  FETCH_PRODUCTS_BY_FILTER_QUERY_FAILURE
} from '../actions/products';

const initialState = { loading: false, products: [] };
const productsByFIlter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_BY_FILTER_QUERY_START:
      return { ...state, loading: payload.loading };
    case FETCH_PRODUCTS_BY_FILTER_QUERY_SUCCESS:
      return { ...state, products: payload.products, loading: payload.loading };
    case FETCH_PRODUCTS_BY_FILTER_QUERY_FAILURE:
      return {
        ...state,
        error: payload.err,
        loading: payload.loading
      };
    default:
      return { ...state };
  }
};
export default productsByFIlter;
