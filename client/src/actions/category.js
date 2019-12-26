import API from "../services/api/api";

// Fetch all CATEGORIES
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

const getCategory = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_CATEGORIES_START,
        payload: { loading: false },
      });
      const categories = await API.category.fetchCategoriesApi();
      if (categories.name === "Error") {
        throw new Error(categories.message);
      }
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: { categories, loading: true },
      });
    } catch (err) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: { error: err, loading: true },
      });
    }
  };
};
export default getCategory;
