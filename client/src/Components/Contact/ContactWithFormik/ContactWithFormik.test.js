import React from "react";
import ReactDOM from "react-dom";
import ContactWithFormik from "./ContactWithFormik";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContactWithFormik />, div);
  ReactDOM.unmountComponentAtNode(div);
});
