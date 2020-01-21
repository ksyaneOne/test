import { ADD_TO_BASKET, SET_TOTAL_PRICE, REMOVE_FROM_CART } from "../actions/cart/actionNames";

const products = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const initialState = { products, totalPrice: 0 };

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.products.every(item => item.itemNo !== action.payload.itemNo)) {
        return { ...state, products: [...state.products, action.payload] };
      }
      break;
    case REMOVE_FROM_CART: {
      console.log(action.payload);
      const newProducts = state.products.filter(item => item.itemNo !== action.payload);

      return { ...state, products: newProducts };
    }
    case SET_TOTAL_PRICE: {
      const productsUpdated = state.products.map(item => {
        if (item.itemNo === action.payload.itemNo) item.quantity = action.payload.quantity;
        return item;
      });
      const sumPrice = productsUpdated.reduce(
        (sum, item) => +(sum + item.currentPrice * item.quantity).toFixed(2),
        0,
      );

      return { ...state, productsUpdated, totalPrice: sumPrice };
    }
  }

  return state;
};
export default cart;
