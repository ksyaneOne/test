import { FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS } from './../actions/category';

const initialState = { loading: false, categories: [] };
const catalog = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORIES_START:
      return { ...state, loading: payload.loading };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload.categories, loading: payload.loading };
    default:
      return { ...state };
  }
};
export default catalog;
