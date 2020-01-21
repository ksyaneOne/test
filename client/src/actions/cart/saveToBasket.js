import { ADD_TO_BASKET } from "./actionNames";

export const addToBasket = product => dispatch => {
  dispatch({ type: ADD_TO_BASKET, payload: product });
};
