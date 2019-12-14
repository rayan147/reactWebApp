import React, { useState } from "react";
import axios from "axios";
import "../../../Assets/css/Contact.css";

import { Formik } from "formik";
import { DropZone, Form } from "react-formik-ui";
import { Container, Row } from "reactstrap";

import { ContactQuoteSchema } from "../../Validations/ContactQuoteSchema";
import { InitialValues, responseMessage } from "./InitialValues";

import Message from "../../Message";
import Header from "../../Layout/Header";
import Inquery from "../Inquery";
import Name from "../FormComponent/Name";
import Email from "../FormComponent/Email";
import Phone from "../FormComponent/Phone";
import Subject from "../FormComponent/Subject";
import EventDate from "../FormComponent/EventDate";
import EventTimeDate from "../FormComponent/EventTimeDate";
import DeliveryDate from "../FormComponent/DeliveryDate";
import DeliveryTime from "../FormComponent/DeliveryTime";
import ButtonComponent from "../ButtonComponent";

import FadeIn from "../../Animations/FadeIn";
import EventType from "../FormComponent/EventType";
import NumberOfGuest from "../FormComponent/NumberOfGuest";
import Flavour from "../FormComponent/Flavour";
import Soak from "../FormComponent/Saok";
import Filling from "../FormComponent/Filling";
import MessageApp from "../FormComponent/Message";
import IsCheckBox from "../FormComponent/IsCheckBox";
import AdditonalNotes from "../FormComponent/AdditonalNotes";
import StreetName from "../FormComponent/StreetName";
import CitySate from "../FormComponent/CityState";
const ContactQuoteWithFormiks = () => {
  const [formMessage, setFormMessage] = useState("");
  const displayMessage = formMessage ? <Message msg={formMessage} /> : null;

  return (
    <>
      <Container className="mb-5">
        <Header title="CUSTOM QUOTES" />
      </Container>
      <FadeIn>
        <Inquery />
        <Formik
          initialValues={InitialValues}
          validationSchema={ContactQuoteSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            //WRITE AXIOS CALL TO THE SERVER HERE
            try {
              (async () => {
                let quoteAPI = "/api/v1/quotes";
                let formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("subject", values.subject);
                formData.append("phone", values.phone);
                formData.append("message", values.message);
                formData.append("eventDate", values.eventDate);
                formData.append("dateTime", values.dateTime);
                formData.append(" flavour", values.flavour);
                formData.append("eventType", values.eventType);
                formData.append("filling", values.filling);
                formData.append("soak", values.soak);
                formData.append("files", values.files);
                formData.append(" numberOfGuest", values.numberOfGuest);
                formData.append("location", values.location);
                formData.append("stretAddress", values.stretAddress);
                formData.append("deliveryDate", values.deliveryDate);
                formData.append(" deliveryTime", values.deliveryTime);
                formData.append(
                  "isFirstTimeCustumer",
                  values.isFirstTimeCustumer
                );
                formData.append(
                  "isReturningCustumer",
                  values.isReturningCustumer
                );
                formData.append("designNote", values.designNote);

                //loop over input array

                for (let i = 0; i < values.files.length; i++) {
                  formData.append("files", values.files[i]);
                }

                const response = await axios.post(quoteAPI, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });
                console.log(response);
                setFormMessage(responseMessage);
                resetForm();
                setSubmitting(false);
                return response;
              })();
            } catch (err) {
              if (err.response.status === 500) {
                setFormMessage("There was a problem with the server");
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
            isSubmitting
          }) => (
            <Container style={styleMargin}>
              {displayMessage}
              <Form
                className="shadow-lg p-5 mb-5 bg-white rounded"
                mode="structured"
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
                  <EventDate
                    className={touched.eventDate && errors.eventDate}
                    touched={touched.eventDate}
                    errors={errors.eventDate}
                  />
                  <EventTimeDate
                    className={touched.dateTime && errors.dateTime}
                    touched={touched.dateTime}
                    errors={errors.dateTime}
                  />
                  <DeliveryDate
                    className={touched.deliveryDate && errors.deliveryDate}
                    touched={touched.deliveryDate}
                    errors={errors.deliveryDate}
                  />
                  <DeliveryTime
                    className={touched.deliveryTime && errors.deliveryTime}
                    touched={touched.deliveryTime}
                    errors={errors.deliveryTime}
                  />
                  <EventType
                    touched={touched.eventType}
                    message={errors.eventType}
                    className={
                      touched.eventType && errors.eventType ? "has-error" : null
                    }
                  />
                  <NumberOfGuest
                    touched={touched.numberOfGuest}
                    message={errors.numberOfGuest}
                    className={
                      touched.numberOfGuest && errors.numberOfGuest
                        ? "has-error"
                        : null
                    }
                  />
                  <Flavour
                    touched={touched.flavour}
                    message={errors.flavour}
                    className={
                      touched.flavour && errors.flavour ? "has-error" : null
                    }
                  />
                  <Soak
                    touched={touched.soak}
                    message={errors.soak}
                    className={touched.soak && errors.soak ? "has-error" : null}
                  />
                  <Filling
                    className={
                      touched.filling && errors.filling ? "has-error" : null
                    }
                    touched={touched.filling}
                    message={errors.filling}
                  />
                </Row>
                <MessageApp
                  Name="Design Notes"
                  touched={touched.designNote}
                  errros={errors.designNote}
                  className={touched.designNote && errors.designNote}
                />

                <Container className="m-3">
                  <Row>
                    <StreetName
                      className={touched.stretAddress && errors.stretAddress}
                      touched={touched.stretAddress}
                      errors={errors.stretAddress}
                    />

                    <CitySate
                      className={touched.location && errors.location}
                      touched={touched.location}
                      errors={errors.location}
                    />
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <AdditonalNotes
                      touched={touched.message}
                      errors={errors.message}
                      className={touched.message && errors.message}
                    />
                  </Row>
                </Container>

                <Container className="m-5">
                  <Row>
                    <IsCheckBox
                      value="isReturningCustumer"
                      nameTitle=" Are you a returning customer?"
                      touched={touched.isFirstTimeCustumer}
                      errors={errors.isFirstTimeCustumer}
                      className={
                        touched.isFirstTimeCustumer &&
                        errors.isFirstTimeCustumer
                          ? "has-error"
                          : null
                      }
                    />
                    <IsCheckBox
                      value="isFirstTimeCustumer"
                      nameTitle=" Are you a first time customer?"
                      touched={touched.isFirstTimeCustumer}
                      errors={errors.isFirstTimeCustumer}
                      className={
                        touched.isFirstTimeCustumer &&
                        errors.isFirstTimeCustumer
                          ? "has-error"
                          : null
                      }
                    />
                  </Row>
                </Container>
                <Container>
                  <DropZone
                    id="files"
                    name="files"
                    label="File upload"
                    placeholder="Try dropping some files here, or click to select files to upload."
                    withClearButton
                    multiple={true}
                  />
                  <ButtonComponent disable={isSubmitting} name="Submit" />
                </Container>
              </Form>
            </Container>
          )}
        </Formik>
      </FadeIn>
    </>
  );
};

const styleMargin = {
  marginTop: "4rem",
  marginBottom: "3rem"
};

export default ContactQuoteWithFormiks;
