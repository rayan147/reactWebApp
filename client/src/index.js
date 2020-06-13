import React from "react";
import dotenv from "dotenv"
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import Amplify from "aws-amplify";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

console.log(process.env.REACT_APP_REGION )
/* Initialize amplify */
Amplify.configure({
  Auth: {
    region:"us-east-1" ,
    userPoolId:"us-east-1_Ch1m7YrXu",
    userPoolWebClientId:"2v6mpcuq1namaljpcgrqu2os5g"
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
