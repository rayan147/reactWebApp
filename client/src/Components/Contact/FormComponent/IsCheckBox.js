import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import Error from "../../Helpers/Error/Error";
import LabelComponent from "../LabelComponent";

const IsCheckBox = ({ touched, message, className, nameTitle, value }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup check inline>
          <Field
            bsSize="lg"
            name={value}
            type="checkbox"
            as={Input}
            className={className}
          />
          <LabelComponent check name={nameTitle} />
          <Error touched={touched} message={message} />
        </FormGroup>
      </Col>
    </>
  );
};
export default IsCheckBox;
