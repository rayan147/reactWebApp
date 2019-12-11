import React from "react";
import ReactDOM from "react-dom";
import FadeIn from "../FadeIn";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FadeIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
