import {
  LOADING_CLIENTS,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_FAIL,
  ADD_NEW_CLIENTS_FAIL,
  ADD_NEW_CLIENTS_SUCCESS,
  LOGIN_CLIENT_SUCCESS,
  LOGIN_CLIENT_FAIL,
  LOGOUT,
  GET_CURRENT_CLIENT_FAIL,
  GET_CURRENT_CLIENT_SUCCESS,
} from "../constants/clientActionsTypes";
import axios from "axios";

export const getAllClients = () => async (dispatch) => {
  dispatch({ type: LOADING_CLIENTS });
  try {
    const response = await axios.get("http://localhost:5000/clients/all");
    dispatch({
      type: GET_ALL_CLIENTS_SUCCESS,
      payload: response.data.allClients,
    });
  } catch (error) {
    dispatch({ type: GET_ALL_CLIENTS_FAIL });
  }
};

export const addNewClient = (newClient) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/clients/add", newClient);
    dispatch({ type: ADD_NEW_CLIENTS_SUCCESS });
    dispatch(getAllClients());
  } catch (error) {
    dispatch({ type: ADD_NEW_CLIENTS_FAIL });
  }
};

export const login = (loggedClient, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/clients/login",
      loggedClient
    );
    navigate("/store");
    dispatch({ type: LOGIN_CLIENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_CLIENT_FAIL, payload: error.response.data });
  }
};

export const getCurrent = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/clients/current", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch({ type: GET_CURRENT_CLIENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CURRENT_CLIENT_FAIL, payload: error });
  }
};

export const logout = (navigate) => {
  navigate("/auth");
  return { type: LOGOUT };
};
