import React from "react";
import ReactDOM from "react-dom";
import Flavour from "./Flavour";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Flavour />, div);
  ReactDOM.unmountComponentAtNode(div);
});
