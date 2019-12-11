import React from "react";
import PropTypes from "prop-types";
const Message = ({ msg }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show p-3"
      role="alert"
    >
      {msg}
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
