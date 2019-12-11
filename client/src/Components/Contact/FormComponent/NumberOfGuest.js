import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import Error from "../../Helpers/Error";
import LabelComponent from "../LabelComponent";

const NumberOfGuest = ({ touched, message, className }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <LabelComponent name="Number Of Guests" />
          <Field
            as={Input}
            type="select"
            name="numberOfGuest"
            className={className}
          >
            <option></option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            <option>60</option>
            <option>70</option>
            <option>80</option>
            <option>90</option>
            <option>100+</option>
            <option>200+</option>
            <option>Other</option>
          </Field>
          <Error touched={touched} message={message} />
        </FormGroup>
      </Col>
    </>
  );
};
export default NumberOfGuest;
