import React from "react";

import FunctionalSencondaryComp from "../../Layout/FunctionalSecondaryComp";
const Inquery = ({ title }) => {
  const divInquery = (
    <p className="lead">
      Please use our custom enquiry forms. For all quotes please be aware that
      because we custom design all of our cakes based on each customers
      requirements and event. We ask that you allow 2-3 weeks for your quote
      (good things take time)
    </p>
  );
  const divDelivery = (
    <p className="lead">
      We provide a delivery service with all of our orders. Prices vary
      depending on the distance from from our studio in Bergen County. Any cake
      placed outside during an event has the possibility of melting or deforming
      due to the heat. We are not liable for a cake once it has been delivered
      or picked up.
    </p>
  );

  return (
    <>
      <FunctionalSencondaryComp
        mainContent={divInquery}
        title="Custom Inquiries"
      />
      <FunctionalSencondaryComp
        mainContent={divDelivery}
        title="DELIVERY AND TRAVEL"
      />
    </>
  );
};

export default React.memo(Inquery);
