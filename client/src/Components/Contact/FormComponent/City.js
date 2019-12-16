import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet/FormGroupFieldComponet";

const City = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="City "
        type="input"
        name="location"
        colSize={3}
        Touched={touched}
        Errors={errors}
        className={className}
      />
    </>
  );
};
export default City;
