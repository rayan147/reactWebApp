import React, { useCallback } from "react";
import { Container, Col, NavLink, Row, NavItem } from "reactstrap";

const GetCurrentDateYear = () => {
  const date = useCallback(() => new Date(), []);
  return (
    <Container>
      <Row>
        <Col>
          <NavItem>
            <label className="text-justify text-muted mt-5">
              <NavLink style={textDecoractionNone} href="https://rayanr.com">
                Copyright @ {date().getFullYear()} Rayan Ramirez All rights
                reserved.
              </NavLink>
            </label>
          </NavItem>
        </Col>
      </Row>
    </Container>
  );
};
const textDecoractionNone = {
  color: "inherit"
};
export default React.memo(GetCurrentDateYear);
