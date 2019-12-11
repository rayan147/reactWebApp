import React from "react";
import Imgix from "react-imgix";
import { images } from "./GalleryArray";
import { Container, Row, Col } from "reactstrap";
import "../../Assets/css/Gallary.css";
import FadeIn from "../Animations/FadeIn";
import Header from "../Layout/Header";
const Gallary = () => (
  <>
    <div className="mb-5">
      <Header title="GALLERY" />
    </div>
    <FadeIn>
      <Container fuild className="Gallery ">
        <Row>
          {images.map(obj => (
            <Col lg={3} md={4} sm={6} xs={7}>
              <div className="text-center image" key={obj.src}>
                <Imgix
                  className="img shadow-lg p-1 mb-5 bg-white rounded"
                  // width={50}
                  height={400}
                  src={obj.src}
                  alt={obj.label}
                  imgixParams={{ ar: "1.6: 2.4", fit: "crop" }}
                  htmlAttributes={{ media: "(min-width: 320px)" }}
                />

                {/* <figcaption>{obj.label}</figcaption> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </FadeIn>
  </>
);

const style = {
  // width: "17rem",
  // height: "31rem"
};
export default React.memo(Gallary);
