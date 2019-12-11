import React from "react";
import uuid from "uuid";
import Header from "../Layout/Header";
import { Container, Row, Col } from "reactstrap";

const Flavour = props => {
  const flavourFirstCol = [
    { id: uuid.v4(), name: "Chocolate" },

    { id: uuid.v4(), name: "Vanilla" },

    { id: uuid.v4(), name: "Red Velvet" },

    { id: uuid.v4(), name: "Lemon" },

    { id: uuid.v4(), name: "Almond" },

    { id: uuid.v4(), name: "Coconut" },

    { id: uuid.v4(), name: "Banana" },

    { id: uuid.v4(), name: "Apple Pie" },
    { id: uuid.v4(), name: "Apple" }
  ];
  const flavourSecondCol = [
    { id: uuid.v4(), name: "Lime" },

    { id: uuid.v4(), name: "Strawberry" },

    { id: uuid.v4(), name: "Raspberry" },

    { id: uuid.v4(), name: "Blueberry" },

    { id: uuid.v4(), name: "Blackberry" },

    { id: uuid.v4(), name: "Mixed Berries" },

    { id: uuid.v4(), name: "Orange" },

    { id: uuid.v4(), name: "Pineapple" },

    { id: uuid.v4(), name: "Carrot" }
  ];
  const flavourThirdCol = [
    { id: uuid.v4(), name: "Earl Grey" },

    { id: uuid.v4(), name: "Confetti" },

    { id: uuid.v4(), name: "Espresso" },

    { id: uuid.v4(), name: "Champagne" },

    { id: uuid.v4(), name: "Peach" },

    { id: uuid.v4(), name: "Chocolate Banana" },

    { id: uuid.v4(), name: "Mango" }
  ];
  const mappedflavourThirdCol = flavourThirdCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));
  const mappedflavourSecondCol = flavourSecondCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));
  const mappedflavourFirstCol = flavourFirstCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));
  const styleFont = {
    fontWeight: "600",
    fontSize: "2rem"
  };
  const stlyeMargin = {
    marginBottom: "11rem",
    marginTop: "9rem"
  };
  return (
    <div style={stlyeMargin}>
      <Container className="Flavours ">
        <Container className="mb-5">
          <Header title="FLAVORS" />
        </Container>
        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <Col lg={4} md={6}>
            {mappedflavourFirstCol}
          </Col>
          <Col lg={4} md={6}>
            {mappedflavourThirdCol}
          </Col>
          <Col lg={4} md={6}>
            {mappedflavourSecondCol}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Flavour);
