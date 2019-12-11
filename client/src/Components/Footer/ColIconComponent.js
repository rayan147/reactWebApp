import React from "react";
import { Col, NavItem, NavLink } from "reactstrap";

import "../../Assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColIconComponent = ({ color, icon, className, href }) => {
  return (
    <>
      <Col className={className}>
        <NavItem className=" footer-comp">
          <NavLink className=" footer-comp" href={href}>
            <FontAwesomeIcon color={color} size="2x" icon={icon} />
          </NavLink>
        </NavItem>
      </Col>
    </>
  );
};
export default React.memo(ColIconComponent);
