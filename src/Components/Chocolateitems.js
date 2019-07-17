import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { get_data } from "../actionCreators/SignupAC";

export default class Chocolateitems extends Component {
  render() {
    return (
      <>
        <div className="mb-4">
          <Card
            style={{ width: "25rem", flex: "initial" }}
            className="bg-white text-center text-warning shadow rounded"
            border="warning"
          >
            <br />
            <Container>
              <Link to={`/chocolatedetail/${this.props.id}`}>
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  style={{ width: "20rem" }}
                  src={this.props.image}
                  alt={this.props.name}
                />
              </Link>{" "}
            </Container>
            <hr style={{ border: "1px solid #ffbb33", borderRadius: "5px" }} />
            <Card.Body className="bd-dark" border="warning">
              <Card.Title>{this.props.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
