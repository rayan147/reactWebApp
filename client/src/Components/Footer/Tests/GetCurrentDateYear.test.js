import React from "react";
import ReactDOM from "react-dom";
import GetCurrentDateYear from "../GetCurrentDateYear";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GetCurrentDateYear />, div);
  ReactDOM.unmountComponentAtNode(div);
});
