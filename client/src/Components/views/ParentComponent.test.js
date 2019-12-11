import React from "react";
import ReactDOM from "react-dom";
import ParentComponent from "./ParentComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ParentComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
