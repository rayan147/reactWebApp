import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import Error from "../../Helpers/Error";
import LabelComponent from "../LabelComponent";

const Soak = ({ touched, message, className }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <LabelComponent name="Soaks " />
          <Field as={Input} type="select" name="soak" className={className}>
            <option></option>
            <option>Whiskey</option>
            <option>Limoncello</option>
            <option>Hennessy</option>
            <option>Kahlua</option>
            <option>Schnapps</option>
            <option>Flavored Vodka</option>
            <option>Tequila</option>
            <option>Vodka</option>
            <option>Grand Marnier</option>
            <option>Amaretto</option>
            <option>Frangelico</option>
            <option>Gin</option>
            <option>Rum</option>
            <option>Cannoli Cream</option>
            <option>Pecan Praline</option>
            <option>None</option>
          </Field>
          <Error touched={touched} message={message} />
        </FormGroup>
      </Col>
    </>
  );
};
export default Soak;
