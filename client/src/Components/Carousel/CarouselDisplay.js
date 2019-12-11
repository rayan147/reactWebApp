import React, { Suspense } from "react";
import { Spinner } from "reactstrap";

const Carousel = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return import("./Carousel");
});

const CarouselDisplay = () => {
  const styleSize = {
    width: "4rem",
    height: "4rem"
  };
  const isLoadindSpinner = () => (
    <div className="text-center">
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
      <Spinner style={styleSize} type="grow" color="danger" />
    </div>
  );
  return (
    <div>
      <Suspense fallback={isLoadindSpinner}>
        <Carousel />
      </Suspense>
    </div>
  );
};

export default React.memo(CarouselDisplay);
