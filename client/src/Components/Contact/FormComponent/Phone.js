import React from "react";

import FormGroupFieldComponet from "../FormGroupFieldComponet";

const Phone = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Phone"
        name="phone"
        type="input"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default Phone;
