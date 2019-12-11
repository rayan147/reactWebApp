import React from "react";
import ReactDOM from "react-dom";
import FunctionalMainComp from "../FunctionalMainComp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FunctionalMainComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
