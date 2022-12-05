import {
  LOADING_CLIENTS,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_FAIL,
  ADD_NEW_CLIENTS_FAIL,
  LOGIN_CLIENT_SUCCESS,
  LOGIN_CLIENT_FAIL,
  LOGOUT,
  GET_CURRENT_CLIENT_SUCCESS,
  GET_CURRENT_CLIENT_FAIL,
} from "../constants/clientActionsTypes";

const initialState = {
  loading: false,
  clients: [],
  error: null,
  currentClient: [],
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CLIENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        clients: action.payload,
      };
    case GET_ALL_CLIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_NEW_CLIENTS_FAIL:
      return { ...state, error: action.payload };

    case LOGIN_CLIENT_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, currentClient: action.payload.client };

    case LOGIN_CLIENT_FAIL:
      return { ...state, error: action.payload };

    case GET_CURRENT_CLIENT_SUCCESS:
      return { ...state, currentClient: action.payload };
    case GET_CURRENT_CLIENT_FAIL:
      return { ...state, errors: action.payload };

    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, error: null, currentClient: [] };

    default:
      return state;
  }
};
