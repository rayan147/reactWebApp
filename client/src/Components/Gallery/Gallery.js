import React from "react";
import Imgix from "react-imgix";
import { images } from "./GalleryArray";
import { Container, Row, Col } from "reactstrap";
import "../../Assets/css/Gallary.css";
import FadeIn from "../Animations/FadeIn";
import Header from "../Layout/Header";
import uuid from "uuid";
const Gallary = () => (
  <div style={styleMarginTop}>
    <div style={styleMarginBottom} className="">
      <Header title="GALLERY" />
    </div>
    <FadeIn>
      <Container className="Gallery  container-fluid">
        <Row>
          {images.map(obj => (
            <Col lg={4} md={6} sm={6} xs={7} key={uuid.v4()}>
              <div className="text-center Gallery__frame" key={obj.src}>
                <Col>
                  <Col>
                    <Col className="col-sm-12 col-xs-12 col-md-8">
                      <Imgix
                        className="Gallery__frame--images shadow-lg p-1 mb-5 bg-white rounded"
                        // width={50}
                        height={400}
                        src={obj.src}
                        alt={obj.label}
                        imgixParams={{ ar: "1.9: 2.8", fit: "crop" }}
                        htmlAttributes={{ media: "(min-width: 320px)" }}
                      />
                    </Col>
                  </Col>
                </Col>
                {/* <figcaption>{obj.label}</figcaption> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </FadeIn>
  </div>
);
const styleMarginTop = {
  marginTop: "6rem"
};
const styleMarginBottom = {
  marginBottom: "8rem"
};
export default React.memo(Gallary);
