import React, { useEffect } from "react";
import FillingModel from "./FillingModel";
import "../../Assets/css/Filling.css";

import Header from "../Layout/Header";
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  ButtonToggle
} from "reactstrap";
import { getFillings, deleteFilling } from "../../actions/fillingActions";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Filling = props => {
  const API_DATA_FILLINGS = async () => {
    return await props.getFillings();
  };

  useEffect(() => {
    API_DATA_FILLINGS();
  }, []);

  const onDeleteClick = async id => {
    return await props.deleteFilling(id);
  };

  const { fillings } = props.filling;

  const mappedFillingFirstCol = fillings.map(({ _id, name }) => (
    <ListGroup flush key={_id}>
      <TransitionGroup>
        <CSSTransition key={_id} timeout={500} classNames="alert">
          <ListGroupItem className="Filling--item" key={_id}>
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
      <Header title="FILLINGS" />
      <FillingModel />
      <Container className="Filling">
        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <div className="Filling">{mappedFillingFirstCol}</div>
        </Row>
      </Container>
    </Container>
  );
};
const mapStateToProp = state => ({
  filling: state.filling
});

export default connect(
  mapStateToProp,
  { getFillings, deleteFilling }
)(Filling);
