import { SET_TOTAL_PRICE } from "./actionNames";

const setTotalPrice = (quantity, itemNo) => {
  return { type: SET_TOTAL_PRICE, payload: { quantity, itemNo } };
};
export default setTotalPrice;
