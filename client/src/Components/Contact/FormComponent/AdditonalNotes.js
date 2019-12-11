import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

import { FormText } from "reactstrap";

const AdditonalNotes = ({ className, touched, message }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Additional Notes"
        style={styleTexarea}
        id="message"
        name="message"
        type="textarea"
        colSize={12}
        className={className}
        Touched={touched}
        Errors={message}
      />
      <FormText size="lg" color="muted">
        Feel free to attach any images of designs or color swatches you had in
        mind for your event or anything further you think will help us put
        together a quote for you. For additional flavors/soaks/fillings please
        specify here.
      </FormText>
    </>
  );
};
const styleTexarea = {
  height: "12rem"
};
export default AdditonalNotes;
