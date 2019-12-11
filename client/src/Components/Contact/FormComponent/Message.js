import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

import { FormText } from "reactstrap";

const MessageApp = ({ className, touched, message, Name }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name={Name}
        style={styleTexarea}
        id="designNote"
        name="designNote"
        type="textarea"
        colSize={12}
        className={className}
        Touched={touched}
        Errors={message}
      />
      <FormText size="lg" color="muted">
        Feel free to attach any images of designs or colour swatches you had in
        mind for your event or anything further you think will help us put
        together a quote for you.
      </FormText>
    </>
  );
};
const styleTexarea = {
  height: "12rem"
};
export default MessageApp;
