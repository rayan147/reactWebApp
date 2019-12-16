import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet/FormGroupFieldComponet";

const State = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="State "
        type="input"
        name="state"
        colSize={3}
        Touched={touched}
        Errors={errors}
        className={className}
      />
    </>
  );
};
export default State;
