import { combineReducers } from "redux";
import alert from "./alert";
import product from "./product";
import cart from "./cart";
export default combineReducers({ alert, product, cart });
