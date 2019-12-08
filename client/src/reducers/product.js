import {
  FETCH_PRODUCTBYID_START,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_PRODUCTBYID_FAILURE
} from '../actions/products';

const initialState = { loading: false, product: {} };
const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTBYID_START:
      return { ...state, loading: payload.loading };
    case FETCH_PRODUCTBYID_SUCCESS:
      return { ...state, product: payload.product, loading: payload.loading };
    case FETCH_PRODUCTBYID_FAILURE:
      return { ...state, error: payload.error, product: {}, loading: payload.loading };
    default:
      return { ...state };
  }
};
export default product;
