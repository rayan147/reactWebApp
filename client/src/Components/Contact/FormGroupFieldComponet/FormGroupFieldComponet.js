import React from "react";
import { Field } from "formik";
import Error from "../../Helpers/Error";
import { FormGroup, Input, Col } from "reactstrap";
import "../../../Assets/css/Contact.css";
import LabelComponent from "../LabelComponent";

const FormGroupFieldComponet = ({
  Name,
  name,
  type,
  as,
  style,
  placeholder,
  className,
  Touched,
  Errors,
  colSize
}) => {
  return (
    <>
      <Col md={colSize}>
        <LabelComponent name={Name} />
        <FormGroup className="mb-0">
          <Field
            name={name}
            type={type}
            as={Input}
            bsSize="lg"
            id={Name}
            style={style}
            placeholder={Name}
            className={className && className ? "has-error" : null}
          />
          <Error touched={Touched} message={Errors} />
        </FormGroup>
      </Col>
    </>
  );
};
export default React.memo(FormGroupFieldComponet);
