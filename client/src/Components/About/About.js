import React from "react";
import FunctionalMainComp from "../Layout/FunctionalMainComp";

import { Container } from "reactstrap";
import Header from "../Layout/Header";

const About = props => {
  const divAboutMainContent = (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vitae
        ipsa soluta placeat illum eveniet totam quos laborum aliquid fugiat.
        Nobis id iste amet adipisci ut ad doloremque facilis soluta?
      </p>
    </>
  );

  return (
    <div style={styleMarginButoom}>
      <Container className="mb-5">
        <Header title="ABOUT US" />
      </Container>
      <FunctionalMainComp mainContent={divAboutMainContent} />
    </div>
  );
};
const styleMarginButoom = {
  marginBottom: "10rem"
};
export default React.memo(About);
