import React from "react";
import ReactDOM from "react-dom";
import { Field } from "formik";
import LabelComponent from "./LabelComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LabelComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
