import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import Error from "../../Helpers/Error";
import LabelComponent from "../LabelComponent";

const Flavour = ({ touched, message, className }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <LabelComponent name="Flavors" />
          <Field as={Input} type="select" name="flavour" className={className}>
            <option></option>
            <option>Chocolate</option>
            <option>Vanilla</option>
            <option>Red Velvet</option>
            <option>Lemon</option>
            <option>Almond</option>
            <option>Coconut</option>
            <option>Banana</option>
            <option>Apple Pie</option>
            <option>Apple</option>
            <option>Lime</option>
            <option>Strawberry</option>
            <option>Raspberry</option>
            <option>Blueberry</option>
            <option>Blackberry</option>
            <option>Berries mixed</option>
            <option>Orange</option>
            <option>Pineapple</option>
            <option>Carrot</option>
            <option>Earl Grey</option>
            <option>Confetti</option>
            <option>Espresso</option>
            <option>Champagne</option>
            <option>Peach</option>
            <option>Chocolate Banana</option>
            <option>Mango</option>
            <option>None</option>
          </Field>
          <Error touched={touched} message={message} />
        </FormGroup>
      </Col>
    </>
  );
};
export default Flavour;
