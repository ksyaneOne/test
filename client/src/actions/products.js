import API from '../services/api/api';

// Fetch all PRODUCTS
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Fetch  PRODUCT By Id
export const FETCH_PRODUCT_BY_ID_START = 'FETCH_PRODUCT_BY_ID_START';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';

// Fetch  PRODUCTS By Filter Query
export const FETCH_PRODUCTS_BY_FILTER_QUERY_START = 'FETCH_PRODUCTS_BY_FILTER_QUERY_START';
export const FETCH_PRODUCTS_BY_FILTER_QUERY_SUCCESS = 'FETCH_PRODUCTS_BY_FILTER_QUERY_SUCCESS';
export const FETCH_PRODUCTS_BY_FILTER_QUERY_FAILURE = 'FETCH_PRODUCTS_BY_FILTER_QUERY_FAILURE';

// Fetch  PRODUCTS By Search Phrases
export const FETCH_PRODUCTS_BY_SEARCH_PHRASE_START = 'FETCH_PRODUCTS_BY_SEARCH_PHRASE_START';
export const FETCH_PRODUCTS_BY_SEARCH_PHRASE_SUCCESS = 'FETCH_PRODUCTS_BY_SEARCH_PHRASE_SUCCESS';
export const FETCH_PRODUCTS_BY_SEARCH_PHRASE_FAILURE = 'FETCH_PRODUCTS_BY_SEARCH_PHRASE_FAILURE';

export const getProducts = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_START,
        payload: { loading: false }
      });
      const products = await API.product.fetchProductsAll();
      if (products.name === 'Error') {
        throw new Error(products.message);
      }
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: { products, loading: true }
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: { error: err, loading: true }
      });
    }
  };
};

export const getProductById = id => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_PRODUCT_BY_ID_START,
        payload: { loading: false }
      });
      const product = await API.product.fetchProductById(id);
      dispatch({
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: { product, loading: true }
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCT_BY_ID_FAILURE,
        payload: { error: err, loading: true }
      });
    }
  };
};

export const getProductsByFilterQuery = query => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_BY_FILTER_QUERY_START,
        payload: { loading: false }
      });
      const products = await API.product.fetchProductsByFilterQuery(query);
      if (products.name === 'Error') {
        throw new Error(products.message);
      }
      dispatch({
        type: FETCH_PRODUCTS_BY_FILTER_QUERY_SUCCESS,
        payload: { products, loading: true }
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTS_BY_FILTER_QUERY_FAILURE,
        payload: { error: err, loading: true }
      });
    }
  };
};

export const getProductsBySearchPhrases = phrases => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_BY_SEARCH_PHRASE_START,
        payload: { loading: false }
      });
      const products = await API.product.fetchProductsBySearchPhrases(phrases);
      dispatch({
        type: FETCH_PRODUCTS_BY_SEARCH_PHRASE_SUCCESS,
        payload: { products, loading: true }
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTS_BY_SEARCH_PHRASE_FAILURE,
        payload: { error: err, loading: true }
      });
    }
  };
};
