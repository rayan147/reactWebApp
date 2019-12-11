import React from "react";
import ReactDOM from "react-dom";
import Navbarlink from "../Navbarlink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbarlink />, div);
  ReactDOM.unmountComponentAtNode(div);
});
