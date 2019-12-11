import React from "react";
import { Container, Col, Row } from "reactstrap";

const FunctionalSecondaryComp = ({ mainContent, title }) => {
  return (
    <div>
      <Container>
        <div className="FunctionalSecondaryComp">
          <div className="container-fluid">
            <Row style={styleSecandory}>
              <Col sm={10} xs={10} lg={8}>
                <h5 className="text-dark text-justify">
                  <strong>{title}</strong>
                </h5>
                <> {mainContent}</>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
const styleSecandory = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "baseline",
  marginTop: ".2rem",
  fontSize: "1.5rem",
  marginBottom: "1rem",
  width: "120%"
};
export default React.memo(FunctionalSecondaryComp);
