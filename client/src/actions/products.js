import axios from 'axios';

// Fetch all PRODUCTS
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Fetch  PRODUCT By Id
export const FETCH_PRODUCTBYID_START = 'FETCH_PRODUCT_BY_ID_START';
export const FETCH_PRODUCTBYID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCTBYID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';

const fetchProductsApi = async () => {
  return axios
    .get('/products')
    .then(products => {
      return products.data;
    })
    .catch(err => {
      return err;
    });
};

const fetchProductByIdApi = async id => {
  return axios
    .get(`/products/${id}/`)
    .then(products => {
      return products.data;
    })
    .catch(err => {
      return err;
    });
};

export const getProducts = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_START,
        payload: { loading: false }
      });
      const products = await fetchProductsApi();
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
        type: FETCH_PRODUCTBYID_START,
        payload: { loading: false }
      });
      const product = await fetchProductByIdApi(id);
      dispatch({
        type: FETCH_PRODUCTBYID_SUCCESS,
        payload: { product, loading: true }
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTBYID_FAILURE,
        payload: { error: err, loading: true }
      });
    }
  };
};
