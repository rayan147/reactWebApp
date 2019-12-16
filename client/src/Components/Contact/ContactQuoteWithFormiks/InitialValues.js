import React from "react";
export const InitialValues = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
  designNote: "",
  eventDate: "",
  dateTime: "",
  flavour: "",
  eventType: "",
  filling: "",
  soak: "",
  files: [],
  numberOfGuest: "",
  location: "",
  state: "",
  stretAddress: "",
  deliveryDate: "",
  deliveryTime: "",
  isFirstTimeCustumer: false,
  isReturningCustumer: false
};
const styleMessage = {
  fontWeight: "400",
  fontSize: "1.5rem",
  color: "black"
};

export const responseMessage = (
  <>
    <p style={styleMessage} className="lead text-center">
      Your custom quote has been submitted. Thanks for considering us! Please
      allow us a 24 hour period for the cake/s estimate. For urgent matters,
      don't hesitate to contact us 1-888-707-7070
    </p>
  </>
);
