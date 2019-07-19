//--Types of Chocolates are only to display. -(They have no Functionality)

import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class Types extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} className="shadow">
          {" "}
          <Card.Header className="text-center">Types of Chocolates</Card.Header>
          <ListGroup variant="flush">
            {this.props.types.map(type => (
              <>
                <ListGroup.Item className="text-center text-dark" key={type.id}>
                  {type.name}
                </ListGroup.Item>
                {/* <div className="bg-warning list-group-item list-group-item-action active">
                  <Link to="/" />
                </div> */}
              </>
            ))}
          </ListGroup>
        </Card>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Types);
