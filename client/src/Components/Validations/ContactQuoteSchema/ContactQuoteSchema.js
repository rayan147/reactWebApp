import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ContactQuoteSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too short ")
    .max(50, "Too long")
    .required("Required"),
  eventDate: Yup.string().required("Required"),
  dateTime: Yup.string().required("Required"),
  deliveryDate: Yup.string().required("Required"),
  deliveryTime: Yup.string().required("Required"),
  eventType: Yup.string().required("Required"),
  numberOfGuest: Yup.string().required("Required"),
  subject: Yup.string()
    .min(2, "Too short ")
    .max(50, "Too long"),
  designNote: Yup.string()
    .min(7, "Too short ")
    .max(500, "Too long")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8)
    .required("Required")
});
