import React from "react";
import ReactDOM from "react-dom";
import ContactQuoteWithFormiks from "./ContactQuoteWithFormiks";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContactQuoteWithFormiks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
