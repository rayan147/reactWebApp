import React from "react";
import ReactDOM from "react-dom";
import Filling from "./Filling";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Filling />, div);
  ReactDOM.unmountComponentAtNode(div);
});
