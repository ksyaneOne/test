export const ADD_TO_BASKET = "ADD_TO_BASKET";

export const addToBasket = product => dispatch => {
  dispatch({ type: ADD_TO_BASKET, payload: product });
};
