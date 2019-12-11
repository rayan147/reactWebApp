import React from "react";

import FormGroupFieldComponet from "../FormGroupFieldComponet";

const Subject = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Subject"
        name="subject"
        type="input"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default Subject;
