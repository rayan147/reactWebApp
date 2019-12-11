import React from "react";
import { NavItem, NavLink, Col, Row, Container } from "reactstrap";
import "../../Assets/css/Navbar.css";

const Navbarlink = ({ href, name, className }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavItem className="Navbarlink">
            <NavLink
              active={true}
              className={`${className} link`}
              href={`${href}`}
            >
              {name}
            </NavLink>
          </NavItem>
        </Col>
      </Row>
    </Container>
  );
};
export default React.memo(Navbarlink);
