import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const DeliveryDate = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Collection/Delivery Date"
        id="deliveryDate"
        name="deliveryDate"
        type="date"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default DeliveryDate;
