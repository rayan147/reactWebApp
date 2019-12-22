import React, { useEffect } from "react";
import FlavorModel from "./FlavorModel";
import "../../Assets/css/Flavours.css";

import Header from "../Layout/Header";
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  ButtonToggle
} from "reactstrap";
import { getFlavors, deleteFlavor } from "../../actions/flavorActions";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Flavor = props => {
  const API_DATA_FLAVORS = async () => {
    return await props.getFlavors();
  };

  useEffect(() => {
    API_DATA_FLAVORS();
  }, []);

  const onDeleteClick = async id => {
    return await props.deleteFlavor(id);
  };

  const { flavors } = props.flavor;

  const mappedFlavorFirstCol = flavors.map(({ _id, name }) => (
    <ListGroup flush key={_id}>
      <TransitionGroup>
        <CSSTransition key={_id} timeout={500} classNames="alert">
          <ListGroupItem className="Flavours--item" key={_id}>
            <ButtonToggle
              className="Flavours--item__remove-btn"
              color="danger"
              size="sm"
              style={{ marginRight: "2rem" }}
              onClick={function() {
                onDeleteClick(_id);
              }}
            >
              &times;
            </ButtonToggle>
            {name}
          </ListGroupItem>
        </CSSTransition>
      </TransitionGroup>
    </ListGroup>
  ));

  const styleFont = {
    fontWeight: "600",
    fontSize: "2rem"
  };
  return (
    <Container>
      <Header title="Flavors" />
      <FlavorModel />
      <Container className="Flavours">
        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <div className="Flavours">{mappedFlavorFirstCol}</div>
        </Row>
      </Container>
    </Container>
  );
};
const mapStateToProp = state => ({
  flavor: state.flavor
});

export default connect(
  mapStateToProp,
  { getFlavors, deleteFlavor }
)(Flavor);
