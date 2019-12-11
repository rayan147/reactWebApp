import React from "react";
import ReactDOM from "react-dom";
import Soak from "./Soak";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Soak />, div);
  ReactDOM.unmountComponentAtNode(div);
});
