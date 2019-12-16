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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      quidem hic blanditiis, repellendus molestiae velit minus veritatis
      recusandae id dolor, at expedita alias numquam cum laudantium distinctio
      facere nesciunt ipsam!
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
