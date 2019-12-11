import React from "react";
import ReactDOM from "react-dom";
import CarouselDisplay from "../CarouselDisplay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CarouselDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
