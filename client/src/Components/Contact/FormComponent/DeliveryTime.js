import React from "react";
import FormGroupFieldComponet from "../FormGroupFieldComponet";

const DeliveryTime = ({ className, touched, errors }) => {
  return (
    <>
      <FormGroupFieldComponet
        Name="Collection/Delivery Time"
        name="deliveryTime"
        type="time"
        colSize={6}
        className={className}
        Touched={touched}
        Errors={errors}
      />
    </>
  );
};
export default DeliveryTime;
