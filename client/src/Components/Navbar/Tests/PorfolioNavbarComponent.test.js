import React from "react";
import ReactDOM from "react-dom";
import PorfolioNavbarComponent from "./PorfolioNavbarComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PorfolioNavbarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
