import React from "react";
import ReactDOM from "react-dom";
import GallaryDisplay from "../GallaryDisplay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GallaryDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
