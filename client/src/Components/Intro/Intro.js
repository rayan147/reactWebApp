import React from "react";
import "../../Assets/css/Intro.css";
import { Container } from "reactstrap";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import FunctionalMainComp from "../Layout/FunctionalMainComp";
import DownArrow from "../DownArrow";
import Header from "../Layout/Header";
const Intro = () => {
  const divIntro = (
    <p className="lead">
      Since founding Notorious Bakes for just years ago, Adriana has had the
      exceptional ability and willingness to create desserts that are uniquely
      designed to meet the requests of each individual client. Instead of
      focusing on the specialization of one or two styles of baking, she offers
      and expansive combination of choices.
    </p>
  );

  return (
    <div style={styleMarginTop}>
      <Container className="mb-5 p-0">
        <Header title="Notorious Bakes" />
        <Header title="Adriana G. Noto" />
      </Container>
      <Container>
        <FunctionalMainComp mainContent={divIntro} />
        <DownArrow
          href="#Carsourel"
          color="black"
          className="DownArrow"
          icon={faArrowDown}
        />
      </Container>
    </div>
  );
};
const styleMarginTop = {
  marginTop: "9rem"
};
export default React.memo(Intro);
