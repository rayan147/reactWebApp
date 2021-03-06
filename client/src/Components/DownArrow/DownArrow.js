import React from "react";
import { Row, Col, NavLink, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config } from "react-spring";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const DownArrow = ({ color, icon, className, href }) => {
  const props = useSpring({
    delay: 1300,
    to: [{ opacity: 1, color: "trasnparent" }],
    from: { opacity: 0.4 },
    entered: {},
    config: config.default
  });

  return (
    <animated.div style={props}>
      <div className="justify-content-center">
        <Container className="text-center">
          <Row>
            <Col className="text-center mb-5">
              <NavLink style={styleNavLink} className="text-center" href={href}>
                <FontAwesomeIcon
                  className={className}
                  color={color}
                  size="5x"
                  icon={faArrowDown}
                ></FontAwesomeIcon>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    </animated.div>
  );
};
const styleNavLink = {
  marginTop: "0rem",
  width: "6rem",
  height: "6rem"
};
export default React.memo(DownArrow);
