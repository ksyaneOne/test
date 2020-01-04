import {
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
} from "../actions/products";

const initialState = { loading: false, product: {} };
const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT_BY_ID_START:
      return { ...state, loading: payload.loading };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, product: payload.product, loading: payload.loading };
    case FETCH_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        error: payload.error,
        product: {},
        loading: payload.loading,
      };
    default:
      return { ...state };
  }
};
export default product;
