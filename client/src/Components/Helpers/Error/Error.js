import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="Contact--formmessage__invalid ">&nbsp;</div>;
  }
  if (message) {
    return <div className="Contact--formmessage__invalid ">{message}</div>;
  }
  return <div className="Contact--formmessage__valid">{message}</div>;
};
export default React.memo(Error);
