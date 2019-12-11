import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const CitySate = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="City State "
        type="input"
        name="location"
        colSize={6}
        Touched={touched}
        Errors={errors}
        className={className}
      />
    </>
  );
};
export default CitySate;
