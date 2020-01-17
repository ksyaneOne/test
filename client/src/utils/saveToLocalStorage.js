const saveToLocalStorage = () => (dispatch, getState) => {
  const { cart } = getState();

  localStorage.setItem("cart", JSON.stringify(cart.products));
};
export default saveToLocalStorage;
