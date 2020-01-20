export const FILTER_PRODUCTS_CHANGE = "FILTER_PRODUCTS_CHANGE";

export const changeFilterQuery = query => {
  return {
    type: FILTER_PRODUCTS_CHANGE,
    payload: query,
  };
};
