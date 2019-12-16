import React from "react";
import { NavItem, Col, Row, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../Assets/css/Navbar.css";

const Navbarlink = ({ to, name, className }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavItem className="Navbarlink text-dark">
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={`${className} Navbar--link`}
              activeStyle={{
                fontWeight: "light",
                color: "red"
              }}
              strict
              to={`/${to}`}
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
