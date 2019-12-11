import React from "react";

import { Field } from "formik";
import { FormGroup, Input, Col } from "reactstrap";

import Error from "../../Helpers/Error";
import LabelComponent from "../LabelComponent";

const Filling = ({ touched, message, className }) => {
  return (
    <>
      <Col md={6}>
        <FormGroup>
          <LabelComponent name="Fillings" />
          <Field as={Input} type="select" name="filling" className={className}>
            <option></option>
            <option>Cinnamon Buttercream Mango</option>
            <option>Mango</option>
            <option>Peach</option>
            <option>Bananas</option>
            <option>Smores</option>
            <option>Cheesecake</option>
            <option>PB&J</option>

            <option>Ferrero Rocher Buttercream</option>
            <option> Espresso Buttercream</option>
            <option>Nutella</option>
            <option>Berries</option>
            <option>Cream Cheese</option>
            <option>Lemon Curd</option>
            <option>Almond Cream</option>
            <option>Coconut Buttercream/Cream</option>
            <option>Dulce de Leche</option>
            <option>Caramel/Salted Caramel</option>
            <option>Lime Curd</option>
            <option>Jams</option>
            <option>Oreos</option>
            <option>Peanut Butter</option>
            <option>Cookie Dough</option>
            <option>Chocolate Chip"</option>
            <option>Pineapple/Pineapple Curd</option>
            <option>Chocolate Ganache</option>
            <option>Lavender Buttercream</option>
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
export default Filling;
