import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from './../actions/category';

const initialState = { loading: false, categories: [] };
const catalog = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORIES_START:
      return { ...state, loading: payload.loading };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload.categories, loading: payload.loading };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, error: payload.err, categories: [], loading: payload.loading };
    default:
      return { ...state };
  }
};
export default catalog;
