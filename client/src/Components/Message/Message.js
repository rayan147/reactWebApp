import React from "react";
import PropTypes from "prop-types";
import "../../Assets/css/Message.css";
import { CSSTransition } from "react-transition-group";
import { Container, UncontrolledAlert } from "reactstrap";
const Message = ({ msg }) => {
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <CSSTransition
        classNames="alert"
        in={true}
        unmountOnExit
        timeout={300}
        onExit
        onEnter
      >
        <UncontrolledAlert>{msg} </UncontrolledAlert>
      </CSSTransition>
    </Container>
  );
};

Message.propTypes = {
  msg: PropTypes.object.isRequired
};

export default Message;
