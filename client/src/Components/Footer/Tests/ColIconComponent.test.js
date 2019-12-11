import React from "react";
import ReactDOM from "react-dom";
import ColIconComponent from "../ColIconComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ColIconComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
