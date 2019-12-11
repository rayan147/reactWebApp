import React from "react";
import { Label } from "reactstrap";

const LabelComponent = ({ name }) => {
  return (
    <div>
      <Label htmlFor={name}> {name}</Label>
    </div>
  );
};

export default React.memo(LabelComponent);
