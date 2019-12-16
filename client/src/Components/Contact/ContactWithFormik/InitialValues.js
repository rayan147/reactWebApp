import React from "react";
export const initialValues = {
  name: "Test name",
  email: "rayan361@gmail.com",
  subject: "it works",
  phone: "5565644444",
  designNote: "it woorksss",
  files: [],
  isFirstTimeCustumer: false,
  isReturningCustumer: false
};
const styleMessage={
  fontWeight:"400",
  fontSize:"1.5rem",
  color:"black"

}
export const responseMessage =(
<>
  <p style={styleMessage}className="lead text-center">Your message has been submitted !!.Please allow us a 24 hour for a response.</p>
  </>
  )
 
