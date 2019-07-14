import React, { Component } from "react";
import { connect } from "react-redux";
import Types from "./Types";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    return (
      <>
        <div style={{ float: "right" }}>
          <br />
          <Container>
            <Row>
              <Types />
              <Col lg={true}>{!this.props.isLoggedIn && <Login />}</Col>
              {this.props.isLoggedIn && (
                <>
                  <p>
                    Welcome{" "}
                    {this.props.currentUser.firstName +
                      " " +
                      this.props.currentUser.lastName}
                  </p>
                </>
              )}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
