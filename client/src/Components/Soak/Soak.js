import React from "react";
import uuid from "uuid";
import Header from "../Layout/Header";
import { Container, Row, Col } from "reactstrap";

const Soaks = props => {
  const SoaksFirstCol = [
    { id: uuid.v4(), name: "Whiskey" },

    { id: uuid.v4(), name: "Limoncello" },

    { id: uuid.v4(), name: "Hennessy" },

    { id: uuid.v4(), name: "Kahlua" },

    { id: uuid.v4(), name: "Schnapps" },
    { id: uuid.v4(), name: "Flavored Vodka" },
    { id: uuid.v4(), name: "Tequila " },

    { id: uuid.v4(), name: "Vodka" }
  ];
  const SoaksSecondCol = [
    { id: uuid.v4(), name: "Grand Marnier" },

    { id: uuid.v4(), name: "Amaretto" },

    { id: uuid.v4(), name: "Frangelico" },

    { id: uuid.v4(), name: "Gin" },

    { id: uuid.v4(), name: "Rum" },

    { id: uuid.v4(), name: "Cannoli Cream" },

    { id: uuid.v4(), name: "Pecan Praline" }
  ];

  const mappedSoaksSecondCol = SoaksSecondCol.map(mapped => (
    <ul key={mapped.id} className="list-group list-group-flush">
      <li className="list-group-item" key={mapped.id}>
        {mapped.name}
      </li>
    </ul>
  ));

  const mappedSoaksFirstCol = SoaksFirstCol.map(mapped => (
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
  return (
    <div>
      <Container className="Flavours">
        <Container className="mb-5">
          <Header title="SOAKS" />
        </Container>

        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <Col lg={6} md={6}>
            {mappedSoaksFirstCol}
          </Col>
          <Col lg={6} md={6}>
            {mappedSoaksSecondCol}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Soaks);
