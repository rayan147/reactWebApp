import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const EventTimeDate = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Event Time"
        name="dateTime"
        type="time"
        colSize={6}
        Touched={touched}
        Errors={errors}
        className={className}
      />
    </>
  );
};
export default EventTimeDate;
