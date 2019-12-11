import React from "react";
import FunctionalSecondaryComp from "../Layout/FunctionalSecondaryComp";
import Header from "../Layout/Header";

function InqueryQuote() {
  const styleQuote = (
    <p className="lead mb-5">
      Please be aware that because we custom design all of our cakes based on
      each customers requirements and event. We ask that you allow approx. 1-2
      weeks for your quote (good things take time)
    </p>
  );
  const styleFlavours = (
    <p className="lead mb-5">
      Please refer to the dropdown menus in the form below for cake, icing and
      filling flavours. If you don't see your favourite flavours listed please
      ask as we are more than happy to customise your cake for you.
    </p>
  );
  return (
    <div>
      <Header title="CUSTOME QUOTE" />

      <FunctionalSecondaryComp mainContent={styleQuote} title="QUOTING" />
      <FunctionalSecondaryComp mainContent={styleQuote} title="SIZE" />
      <FunctionalSecondaryComp mainContent={styleFlavours} title="FLAVOURS" />
      <FunctionalSecondaryComp
        mainContent={styleFlavours}
        title="DELIVERY AND TRAVEL"
      />
    </div>
  );
}

export default InqueryQuote;
