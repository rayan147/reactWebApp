import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Form, DropZone } from "react-formik-ui";
import "../../../Assets/css/Contact.css";

import { Container, Row, Input, Col, FormGroup } from "reactstrap";
import { Formik, Field } from "formik";
import { initialValues } from "./InitialValues";
import { ContactUsSchema } from "../../Validations/ContactUsSchema";

import IsCheckBox from "../FormComponent/IsCheckBox";
import Name from "../FormComponent/Name";
import Email from "../FormComponent/Email";
import Phone from "../FormComponent/Phone";
import Subject from "../FormComponent/Subject";

import Message from "../../Message";
import Header from "../../Layout/Header";
import MessageApp from "../FormComponent/Message";
import Inquery from "../Inquery";
import ButtonComponent from "../ButtonComponent";
import FadeIn from "../../Animations/FadeIn";
import Submit from "../FormComponent/Submit";
import FileUpload from "./FileUpload";
import ReactUploads from "../ReactUploads";

const ContactWithFormik = ({ title, onSubmit }) => {
  const [formMessage, setFormMessage] = useState("");

  return (
    <>
      <Container className="mb-5">
        <Header title="CONTACT US" />
      </Container>
      <FadeIn>
        <Inquery />

        <Formik
          initialValues={initialValues}
          validationSchema={ContactUsSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            //CREATE THE FILE READER
            let formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("subject", values.subject);
            formData.append("phone", values.phone);
            // formData.append("files", values.files);
            formData.append("designNote", values.designNote);

            //TODO*  see why  it does send the first iteratiton when only one files is being sent.

            for (let i = 0; i <= values.files.length; i++) {
              formData.append("files", values.files[i]);
            }

            // WRITE AXIOS CALL TO THE SERVER HERE

            try {
              async function sendFormDataToBackEnd() {
                const response = await axios.post(
                  "/api/v1/contact",
                  formData,

                  {
                    headers: {
                      "Content-Type": "multipart/form-data"
                    }
                  }
                );
                console.log(response);
                setFormMessage(
                  "Your message has been submitted !!.Please allow us 24 hour for a response."
                );

                setSubmitting(false);
                resetForm(initialValues);

                return response;
              }
              sendFormDataToBackEnd();
            } catch (err) {
              if (err.response.status === 500) {
                return setFormMessage("There was a problem with the server");
              } else {
                setFormMessage(err.response.data.msg);
              }
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setValues,
            resetForm
          }) => (
            <Container style={styleMargin}>
              <br />
              {formMessage ? <Message msg={formMessage} /> : null}
              <Form
                mode="structured"
                className="shadow-lg p-5 mb-5 bg-white rounded"
                method="post"
                encType="multipart/form-data"
              >
                <Row form>
                  <Email
                    className={touched.email && errors.email}
                    touched={touched.email}
                    errors={errors.email}
                  />

                  <Name
                    className={touched.name && errors.name}
                    touched={touched.name}
                    errors={errors.name}
                  />
                  <Phone
                    className={touched.phone && errors.phone}
                    touched={touched.phone}
                    errors={errors.phone}
                  />
                  <Subject
                    className={touched.subject && errors.subject}
                    touched={touched.subject}
                    errors={errors.subject}
                  />
                  <MessageApp
                    Name="Message"
                    touched={touched.designNote}
                    errros={errors.designNote}
                    className={touched.designNote && errors.designNote}
                  />
                </Row>
                <DropZone
                  id="files"
                  name="files"
                  label="File upload"
                  placeholder="Try dropping some files here, or click to select files to upload."
                  withClearButton
                  multiple={true}
                />
                <ButtonComponent disable={isSubmitting} name="Submit" />
              </Form>
            </Container>
          )}
        </Formik>
      </FadeIn>
    </>
  );
};

const styleMargin = {
  marginTop: "3rem",
  marginBottom: "3rem"
};
export default React.memo(ContactWithFormik);
