import {
  LOADING_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_NEW_PRODUCTS_FAIL,
  ADD_NEW_PRODUCTS_SUCCESS,
} from "../constants/productActionsTypes";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const response = await axios.get("http://localhost:5000/products/all");
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: response.data.allProducts,
    });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAIL });
  }
};

export const addNewProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/products/add", newProduct);
    dispatch({ type: ADD_NEW_PRODUCTS_SUCCESS });
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: ADD_NEW_PRODUCTS_FAIL });
  }
};
