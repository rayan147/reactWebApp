import React from "react";
import { Container } from "reactstrap";
import FadeIn from "../Animations/FadeIn";

const FunctionalMainComp = ({ title, mainContent }) => {
  return (
    <>
      <FadeIn>
        <Container>
          <div className="text-center">
            <div className="row container-fluid">
              <div style={styleMain}>
                <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 ">
                  <h2 className="text-center">{title}</h2>
                  <> {mainContent}</>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </>
  );
};
const styleMain = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  marginBottom: "9rem",
  fontWeight: "200"
};
export default React.memo(FunctionalMainComp);
