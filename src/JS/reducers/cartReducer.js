const initialState = {
  cart: [],
};

if (localStorage.getItem("cart")) {
  initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: action.payload };

    case "DELETE_FROM_CART":
      return { cart: action.payload };

    case "INCREASE_QUANTITY":
      return { cart: action.payload };

    case "DECREASE_QUANTITY":
      return { cart: action.payload };

    case "MAKE_IT_EMPTY":
      localStorage.removeItem("cart");
      return { cart: [] };

    default:
      return state;
  }
};
