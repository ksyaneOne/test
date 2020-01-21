import { REMOVE_FROM_CART } from "./actionNames";

const removeFromBasket = itemNo => ({ type: REMOVE_FROM_CART, payload: itemNo });

export default removeFromBasket;
