import React from "react";
import FunctionalMainComp from "../Layout/FunctionalMainComp";

import { Container } from "reactstrap";
import Header from "../Layout/Header";

const About = props => {
  const divAboutMainContent = (
    <>
      <p>
        Focusing in Bergen County and the surrounding areas, I try to get my
        hands on the best quality ingredients possible. Being self taught, I've
        had ample practice and have experimented with many different techniques.
        With each order, I learn something new and discover more of my natural
        ability to create one of a kind cakes and more. Everything is also made
        by me personally.
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
  marginTop: "10rem",
  marginBottom: "10rem"
};
export default React.memo(About);
