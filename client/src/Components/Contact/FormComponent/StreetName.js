import React from "react";

import FormGroupFieldComponet from "../FormGroupFieldComponet";

const StreetName = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Address"
        type="input"
        name="stretAddress"
        colSize={6}
        Touched={touched}
        Errors={errors}
        className={className}
      />
    </>
  );
};
export default StreetName;
