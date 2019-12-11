import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const Name = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Name"
        name="name"
        type="input"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default Name;
