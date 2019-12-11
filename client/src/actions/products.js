import axios from 'axios';

// Fetch all PRODUCTS
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

const fetchProductsApi = async () => {
  return axios
    .get('/products')
    .then(product => {
      return product.data;
    })
    .catch(err => {
      return err;
    });
};

const getProducts = () => {
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

export default getProducts;
