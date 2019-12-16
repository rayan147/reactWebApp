import React, { Suspense } from "react";
import { Spinner } from "reactstrap";

const Carousel = React.lazy(async () => {
  return await import("./Carousel");
});
const styleSize = {
  width: "4rem",
  height: "4rem"
};
const IsLoadindSpinner = () => (
  <div className="text-center">
    <Spinner style={styleSize} type="grow" color="danger" />
    <Spinner style={styleSize} type="grow" color="danger" />
    <Spinner style={styleSize} type="grow" color="danger" />
  </div>
);
const CarouselDisplay = () => {
  return (
    <div>
      <Suspense fallback={<IsLoadindSpinner />}>
        <Carousel />
      </Suspense>
    </div>
  );
};

export default React.memo(CarouselDisplay);
