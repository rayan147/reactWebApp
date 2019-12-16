import React from "react";
import { Nav, Row, Container } from "reactstrap";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";
import "../../Assets/css/Footer.css";
import GetCurrentDateYear from "./GetCurrentDateYear";
import ColIconComponent from "./ColIconComponent";

const Footer = () => {
  return (
    <Container style={styleMarginButoom} className="Footer">
      <Nav>
        <Container
          fluid
          className="position-sticky shadow-sm p-2 mt-5 bg-white rounded"
        >
          <Row>
            <ColIconComponent
              className="Footer__faFacebookF"
              color="blue"
              icon={faFacebookF}
            />
            <ColIconComponent
              className="Footer__faInstagram"
              color="red"
              icon={faInstagram}
              href="https://www.instagram.com/notoriousbakes/?hl=en"
            />
            <ColIconComponent
              className="Footer__faTwitter"
              color="teal"
              icon={faTwitter}
            />

            <ColIconComponent
              className="Footer__faLinkedinIn"
              color="blue"
              icon={faLinkedinIn}
            />
            <ColIconComponent
              className="Footer__faEnvelope"
              color="red"
              icon={faEnvelope}
              href="mailto:adriana@notoriousbakes.com"
            />
            <ColIconComponent
              className="Footer__faPhone"
              color="black"
              icon={faPhone}
              href="tel:2019821533"
            />
            <ColIconComponent
              className="Footer__faPhone"
              color="black"
              icon={faLongArrowAltUp}
              href="/"
            />

            <GetCurrentDateYear />
          </Row>
        </Container>
      </Nav>
    </Container>
  );
};
const styleMarginButoom = {
  marginBottom: "2rem"
};
export default React.memo(Footer);
