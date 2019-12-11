import React from "react";
import uuid from "uuid";
import Header from "../Layout/Header";
import { Container, Row, Col } from "reactstrap";

const Filling = props => {
  const fillingFirstCol = [
    { id: uuid.v4(), name: "Cinnamon Buttercream" },

    { id: uuid.v4(), name: "Mango" },

    { id: uuid.v4(), name: "Peach" },

    { id: uuid.v4(), name: "Bananas" },

    { id: uuid.v4(), name: "Smores" },

    { id: uuid.v4(), name: "Cheesecake" },

    { id: uuid.v4(), name: "PB&J" },

    { id: uuid.v4(), name: "Ferrero Rocher Buttercream" },
    { id: uuid.v4(), name: "Espresso Buttercream" }
  ];
  const fillingSecondCol = [
    { id: uuid.v4(), name: "Nutella" },

    { id: uuid.v4(), name: "Berries" },
    { id: uuid.v4(), name: "Oreos & Nutella" },

    { id: uuid.v4(), name: "Cream Cheese" },

    { id: uuid.v4(), name: "Lemon Curd" },

    { id: uuid.v4(), name: "Almond Cream" },

    { id: uuid.v4(), name: "Coconut Buttercream/Cream" },

    { id: uuid.v4(), name: "Dulce de Leche" },

    { id: uuid.v4(), name: "Caramel/Salted Caramel " },

    { id: uuid.v4(), name: "Lime Curd" }
  ];
  const fillingThirdCol = [
    { id: uuid.v4(), name: "Jams" },

    { id: uuid.v4(), name: "Oreos" },

    { id: uuid.v4(), name: "Peanut Butter" },

    { id: uuid.v4(), name: "Cookie Dough" },

    { id: uuid.v4(), name: "Chocolate Chip" },

    { id: uuid.v4(), name: "Pineapple/Pineapple Curd" },

    { id: uuid.v4(), name: "Chocolate Ganache" },

    { id: uuid.v4(), name: "Lavender Buttercream" },

    { id: uuid.v4(), name: "Cannoli Cream" },

    { id: uuid.v4(), name: "Pecan Praline" }
  ];
  const mappedFillingThirdCol = fillingThirdCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));
  const mappedFillingSecondCol = fillingSecondCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));
  const mappedFillingFirstCol = fillingFirstCol.map(mapped => (
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
    marginBottom: "14rem",
    marginTop: "9rem"
  };
  return (
    <div style={stlyeMargin}>
      <Container className="Flavours" style={stlyeMargin}>
        <Container className="m-5">
          <Header title="FILLINGS" />
        </Container>

        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <Col lg={4} md={6}>
            {mappedFillingFirstCol}
          </Col>
          <Col lg={4} md={6}>
            {mappedFillingThirdCol}
          </Col>
          <Col lg={4} md={6}>
            {mappedFillingSecondCol}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Filling);
