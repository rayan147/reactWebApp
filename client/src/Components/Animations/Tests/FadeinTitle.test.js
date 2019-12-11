import React from "react";
import ReactDOM from "react-dom";
import FadeInTitle from "../FadeInTitle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FadeInTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
