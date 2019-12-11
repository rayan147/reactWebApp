import React, { Suspense } from "react";
import { Spinner } from "reactstrap";

const Gallary = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return import("../Gallery/Gallery");
});

const GallaryDisplay = () => {
  const styleSize = {
    width: "4rem",
    height: "4rem",
    marginTop: "30rem"
  };
  const isLoadindSpinner = () => (
    <div className="text-center">
      <h1 className="display-3 text-center">Loading ...</h1>
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
    </div>
  );

  return (
    <>
      <Suspense fallback={isLoadindSpinner()}>
        <Gallary />
      </Suspense>
    </>
  );
};

export default React.memo(GallaryDisplay);
