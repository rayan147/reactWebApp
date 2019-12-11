import React from "react";
import ReactDOM from "react-dom";
import { Field } from "formik";
import Inquery from "./Inquery";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inquery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
