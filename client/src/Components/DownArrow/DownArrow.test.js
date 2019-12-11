import React from "react";
import ReactDOM from "react-dom";
import DowmArrow from "./DowmArrow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DowmArrow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
