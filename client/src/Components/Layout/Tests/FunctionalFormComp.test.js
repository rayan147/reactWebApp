import React from "react";
import ReactDOM from "react-dom";
import FunctionalFormComp from "../FunctionalFormComp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FunctionalFormComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
