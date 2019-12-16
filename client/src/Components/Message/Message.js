import React from "react";
import PropTypes from "prop-types";
const Message = ({ msg }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show p-3 text-dark"
      role="alert"
    >
      {msg}
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.object.isRequired
};

export default Message;
