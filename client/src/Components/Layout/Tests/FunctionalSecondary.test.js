import React from "react";
import ReactDOM from "react-dom";
import FunctionalSecondary from "../FunctionalSecondary";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FunctionalSecondary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
