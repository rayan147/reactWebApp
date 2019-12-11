import React from "react";
import Error from "../Contact/Error";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Col
} from "reactstrap";
export const FunctionalFormComp = ({
  values,
  errors,
  title,
  type,
  name,
  id,
  placeholder,
  value,
  onBlur,
  className,
  touched,
  message,
  onChange
}) => {
  return (
    <div>
      <Col md={6}>
        <FormGroup>
          <Label htmlFor="exampleEmail">{title}</Label>
          <Input
            bsSize="lg"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={values}
            onBlur={onBlur}
            onChange={onChange}
            className={touched.title && errors.title ? "has-error" : null}
          />
          {/* <Error touched={touched.title} message={errors.title} /> */}
        </FormGroup>
      </Col>
    </div>
  );
};

{
  /* <Col md={6}>
  <FormGroup>
    <Label htmlFor="exampleEmail">Email</Label>
    <Input
      bsSize="lg"
      type="email"
      name="email"
      id="email"
      placeholder="email"
      value={values.email}
      onBlur={handleBlur}
      onChange={handleChange}
      className={
        touched.email && errors.email ? "has-error" : null
      }
    />
    <Error touched={touched.email} message={errors.email} />
  </FormGroup>
</Col> */
}
