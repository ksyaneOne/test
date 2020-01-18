import { FILTER_PRODUCTS_CHANGE } from "../actions/filterProducts";

const initialState = { query: "" };
const changeFilterQuery = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_PRODUCTS_CHANGE:
      return { ...state, query: payload };
    default:
      return { ...state };
  }
};
export default changeFilterQuery;
