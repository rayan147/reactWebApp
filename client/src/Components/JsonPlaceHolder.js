import React, { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

const JsonPlaceHolder = props => {
  const API_DATA = async () => {
    await props.getItems();
  };
  useEffect(() => {
    API_DATA();
  }, []);

  const onDeleteClick = id => {
    return props.deleteItem(id);
  };

  const { items } = props.item;
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="alert">
                <ListGroupItem>
                  {" "}
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{ marginRight: "2rem" }}
                    onClick={function() {
                      onDeleteClick(_id);
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};
const mapStateToProp = state => ({
  item: state.item
});
export default connect(
  mapStateToProp,
  { getItems, deleteItem }
)(JsonPlaceHolder);
