import axios from "axios";

const CLEAR_CART = "CLEAR_CART";

export const clearCart = () => ({
  type: CLEAR_CART,
  value: [],
});

export const saveOrder = () => async (dispatch, getState) => {
  const order = getState().orderReducer.products;

  await axios
    .post("https://api.com/order", order)
    .then((response) => dispatch(clearCart()))
    .catch((error) => console.log(error));
};
