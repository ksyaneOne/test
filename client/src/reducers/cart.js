import {ADD_TO_BASKET} from '../actions/saveToBasket'
const initialState = {
  itemExist:false,
  products:[]
};
const cart = (state= initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      console.log(action.payload);
      return {...state, product: action.payload};

  }
  return state;

};
export default cart;
