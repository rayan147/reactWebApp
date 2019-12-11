import React from "react";
import ReactDOM from "react-dom";
import { Field } from "formik";
import FormGroupFieldComponet from "./FormGroupFieldComponet";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormGroupFieldComponet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
