import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  INCREASE_QUANTITY,
  MAKE_IT_EMPTY,
} from "../constants/cartActionsTypes";

export const addToCart = (product, currentUser) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const duplicates = cart.filter((cartItem) => cartItem._id === product._id);
  if (duplicates.length === 0) {
    const productToAdd = {
      ...product,
      count: 1,
      priceWithGift: product.is_gift
        ? product.prix_ttc - product.prix_ttc * 0.7
        : product.prix_ttc -
          (product.prix_ttc * currentUser.remise_defaut) / 100,
      total: 1,
    };
    cart.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: ADD_TO_CART, payload: cart });
  }
};

export const deleteFromCart = (product) => (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const updatedCart = cart.filter((x) => x._id !== product._id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch({ type: DELETE_FROM_CART, payload: updatedCart });
};

export const incrementToCart = (product) => (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const selectProduct = cart.find((item) => item._id === product._id);

  selectProduct.count = parseInt(selectProduct.count) + 1;
  selectProduct.total = selectProduct.count * selectProduct.priceWithGift;
  dispatch({ type: INCREASE_QUANTITY, payload: cart });
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseToCart = (product) => (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const selectProduct = cart.find((item) => item._id === product._id);
  if (selectProduct.count > 1) {
    selectProduct.count = parseInt(selectProduct.count) - 1;
    selectProduct.total = selectProduct.count * selectProduct.priceWithGift;
  }
  dispatch({ type: DECREASE_QUANTITY, payload: cart });
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const makeCartEmpty = () => {
  return { type: MAKE_IT_EMPTY };
};
