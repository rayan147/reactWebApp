import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import LabelComponent from "../LabelComponent";
import Error from "../../Helpers/Error";

const EventType = ({ touched, message, className }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <LabelComponent name="Event Type" />
          <Field
            as={Input}
            type="select"
            name="eventType"
            className={className}
          >
            <option value=""></option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Bridal Shower">Bridal Shower</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Other">Other</option>
          </Field>
          <Error touched={touched} message={message} />
        </FormGroup>
      </Col>
    </>
  );
};
export default EventType;
