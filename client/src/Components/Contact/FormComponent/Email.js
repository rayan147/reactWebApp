import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const Email = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Email"
        name="email"
        type="input"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default Email;
