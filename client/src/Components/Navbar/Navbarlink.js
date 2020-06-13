import React from "react";
import { NavItem, Col, Row, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../Assets/css/Navbar.css";

const Navbarlink = ({ to, name, className, onClick, children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavItem className="Navbarlink text-dark">
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={`${className} Navbar--link`}
              onClick={onClick}
              activeStyle={{
                fontWeight: "light",
                color: "blue",
              }}
              strict
              to={`/${to}`}
            >
              {name || children}
            </NavLink>
          </NavItem>
        </Col>
      </Row>
    </Container>
  );
};
export default React.memo(Navbarlink);
