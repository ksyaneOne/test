import {
  FETCH_PRODUCTS_BY_SEARCH_PHRASE_START,
  FETCH_PRODUCTS_BY_SEARCH_PHRASE_SUCCESS,
  FETCH_PRODUCTS_BY_SEARCH_PHRASE_FAILURE
} from '../actions/products';

const initialState = { loading: false, products: [] };
const productsBySearch = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_BY_SEARCH_PHRASE_START:
      return { ...state, loading: payload.loading };
    case FETCH_PRODUCTS_BY_SEARCH_PHRASE_SUCCESS:
      return { ...state, products: payload.products, loading: payload.loading };
    case FETCH_PRODUCTS_BY_SEARCH_PHRASE_FAILURE:
      return {
        ...state,
        error: payload.err,
        loading: payload.loading
      };
    default:
      return { ...state };
  }
};
export default productsBySearch;
