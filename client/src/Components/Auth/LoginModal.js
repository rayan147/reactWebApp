import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Toggle } from "react-formik-ui";
import * as Yup from "yup";
import auth from "./auth";
import { Formik, Field, ErrorMessage } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
  NavLink,
  Input
} from "reactstrap";

const LoginModal = ({ props, children, history }) => {
  const [modal, setModal] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const toggle = () => setModal(!modal);
  const textSize = {
    fontSize: "1.6rem"
  };
  return (
    <div>
      <NavItem className="mt-4">
        <NavLink>
          <Button style={textSize} color="" onClick={toggle}>
            Admin
          </Button>
        </NavLink>
      </NavItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        {/* <ModalBody>{children} </ModalBody> */}
        <ModalBody>
          <Formik
            initialValues={{ password: "", email: "" }}
            validationSchema={Yup.object({
              password: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              //SET DATA TO THE BACK WITH FORMDAT API
              let formData = new FormData();
              formData.append("password", values.password);
              formData.append("email", values.email);

              // WRITE AXIOS CALL TO THE SERVER HERE

              try {
                async function sendFormDataToBackEnd() {
                  const response = await axios.post(
                    "/api/v1/auth/login",
                    formData,

                    {
                      headers: {
                        "Content-Type": "multipart/form-data"
                      }
                    }
                  );
                  resetForm();
                  auth.login(() => {
                    auth.isAuthenticated = true;
                    history.push("/");
                  });
                  return response;
                }
                sendFormDataToBackEnd();
              } catch (err) {
                if (err.response.status === 500) {
                  return setFormMessage("There was a problem with the server");
                } else {
                  setFormMessage(err.response.data.msg.msg);
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
              /* and other goodies */
            }) => (
              <Form>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" as={Input} />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="text" as={Input} />
                <ErrorMessage name="password" />
                <Button
                  color="primary"
                  type="submit"
                  disable="false"
                  className="mt-3"
                  onClick={toggle}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Exit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
