const saveToLocalStorage = () => (dispatch, getState) => {
  const { cart } = getState();

  localStorage.setItem("cart", JSON.stringify(cart));
};
export default saveToLocalStorage;
