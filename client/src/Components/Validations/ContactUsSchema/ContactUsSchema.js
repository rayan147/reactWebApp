import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ContactUsSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too short ")
    .max(50, "Too long")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too short ")
    .max(50, "Too long")
    .required("Required"),
  designNote: Yup.string()
    .min(7, "Too short ")
    .max(500, "Too long")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8)
    .required("Required"),
  files: Yup.string()
});
