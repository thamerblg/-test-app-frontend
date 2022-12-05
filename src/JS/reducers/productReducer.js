import {
  LOADING_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_NEW_PRODUCTS_FAIL,
} from "../constants/productActionsTypes";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_NEW_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
