import React, { Component } from "react";
import { connect } from "react-redux";
import Types from "./Types";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import logo from "../1f36b.png";
import homelogo from "../redchoco.png";
import { get_users } from "../actionCreators/SignupAC";
import Spinner from "react-bootstrap/Spinner";

class Home extends Component {
  componentDidMount() {
    console.log("Hi");
    this.props.dispatch(get_users());
  }
  render() {
    return (
      <>
        {!this.props.isLoggedIn && (
          <img
            src={homelogo}
            className="App-logo text-center "
            alt="logo"
            style={{ marginTop: "7rem", marginLeft: "15rem" }}
          />
        )}
        <div style={{ float: "right" }}>
          <br />
          <Container>
            <Row>
              <Col lg={true}>
                {console.log(
                  this.props.isLoading,
                  this.props.isLoggedIn,
                  !this.props.isLoggedIn && !this.props.isLoading
                )}{" "}
                {!this.props.isLoggedIn &&
                  (this.props.isLoading && (
                    <Spinner
                      animation="border"
                      variant="warning"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        marginRight: "15rem",
                        marginTop: "10rem"
                      }}
                    />
                  ))}
                {!this.props.isLoading && (!this.props.isLoggedIn && <Login />)}
              </Col>
            </Row>
          </Container>{" "}
        </div>
        <br />
        <Container>
          <Row>
            <Col lg={true}>
              {this.props.isLoggedIn &&
                (this.props.isLoading && (
                  <Spinner
                    animation="border"
                    variant="warning"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      marginLeft: "5rem",
                      marginTop: "10rem"
                    }}
                  />
                ))}
              {!this.props.isLoading && (this.props.isLoggedIn && <Types />)}
            </Col>

            <Col md={4}>
              {this.props.isLoggedIn && (
                <>
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <strong className="mr-auto">
                        {this.props.currentUser.firstName.toUpperCase() +
                          " " +
                          this.props.currentUser.lastName.toUpperCase()}
                      </strong>
                    </Toast.Header>
                    <Toast.Body>Welcome, to Chocopedia!</Toast.Body>
                  </Toast>
                  {this.props.isLoggedIn && (
                    <img
                      src={logo}
                      className="App-logo text-center"
                      alt="logo"
                      style={{ marginTop: "3rem", marginLeft: "5rem" }}
                    />
                  )}
                </>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
