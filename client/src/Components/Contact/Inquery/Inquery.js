import React from "react";

import FunctionalSencondaryComp from "../../Layout/FunctionalSecondaryComp";
function Inquery({ title }) {
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      deleniti veniam, exercitationem consequatur similique, itaque, voluptates
      aliquam beatae ut aperiam ab nesciunt minus ipsum sequi! Optio fugiat ut
      quo harum!
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
}

export default React.memo(Inquery);
