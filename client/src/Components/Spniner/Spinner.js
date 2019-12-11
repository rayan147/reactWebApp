import React from "react";
import { Spinner } from "reactstrap";

const loadingSpinner = () => {
  const styleSpinner = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  };
  const styleSize = {
    width: "4rem",
    height: "4rem"
  };
  return (
    <div className="text-center">
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
    </div>
  );
};

export default React.memo(loadingSpinner);
