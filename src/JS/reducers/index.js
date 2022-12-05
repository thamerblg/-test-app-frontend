import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  clientReducer,
  productReducer,
  cartReducer,
});
