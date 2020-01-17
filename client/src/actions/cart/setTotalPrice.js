export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const setTotalPrice = (quantity, itemNo) => {
  return { type: SET_TOTAL_PRICE, payload: { quantity, itemNo } };
};
export default setTotalPrice;
