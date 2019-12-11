import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const EventDate = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Event Date"
        name="eventDate"
        type="date"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default EventDate;
