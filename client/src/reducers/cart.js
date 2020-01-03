import { ADD_TO_BASKET } from "../actions/saveToBasket";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.every(item => item.itemNo !== action.payload.itemNo)) {
        return [...state, action.payload];
      }
  }
  return state;
};
export default cart;
