import saveToLocalStorage from "../utils/saveToLocalStorage";

export const ADD_TO_BASKET = "ADD_TO_BASKET";

export const addToBasket = product => (dispatch, getState) => {
  saveToLocalStorage(product, getState);

  dispatch({ type: ADD_TO_BASKET, payload: product });
};
