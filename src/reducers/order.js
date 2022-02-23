const CLEAR_CART = "CLEAR_CART";

const initialState = {
  products: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
