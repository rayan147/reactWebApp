import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import flavorReducer from "./flavorReducer";
import fillingReducer from "./fillingReducer";
export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  flavor: flavorReducer,
  filling: fillingReducer
});
