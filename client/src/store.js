import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const iniatialState = {};

const middleware = [thunk];

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  iniatialState,
  composeEnhacer(applyMiddleware(...middleware))
);

export default store;
