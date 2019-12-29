import React, { useEffect, useState, Fragment } from "react";
import ItemModel from "../ItemModel";
import Update from "./Update";
import "../../Assets/css/Flavours.css";
import auth from "../Auth/auth";

import Header from "../Layout/Header";
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  ButtonToggle
} from "reactstrap";
import { getItems, deleteItem, updateItem } from "../../actions/itemActions";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Soaks = props => {
  const [state, setState] = useState();
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const API_DATA = async () => {
    return await props.getItems();
  };

  useEffect(() => {
    API_DATA();
  }, []);

  const onDeleteClick = async id => {
    return await props.deleteItem(id);
  };

  const onUpdateClick = id => {
    console.log(id);
    return props.updateItem(id);
  };

  const { items } = props.item;

  const mappedSoaksFirstCol = items.map(({ _id, name }) => (
    <ListGroup flush key={_id}>
      <TransitionGroup key={_id}>
        <CSSTransition key={_id} timeout={500} classNames="alert">
          <ListGroupItem className="Flavours--item" key={_id}>
            {auth.isAuthenticated === true ? (
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
            ) : (
              ""
            )}
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

  const authLink = (
    <Fragment>
      <ItemModel />
    </Fragment>
  );
  return (
    <Container>
      <Header title="SOAKS" />
      {auth.isAuthenticated === true ? authLink : ""}

      <Container className="Flavours">
        <Row className="shadow-lg p-3 mb-5 bg-white rounded" style={styleFont}>
          <div className="Flavours">{mappedSoaksFirstCol}</div>
        </Row>
      </Container>
    </Container>
  );
};
const mapStateToProp = state => ({
  item: state.item
});

export default connect(
  mapStateToProp,
  { getItems, deleteItem, updateItem }
)(Soaks);
