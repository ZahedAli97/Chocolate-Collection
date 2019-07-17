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
import { get_users, get_data, set_error_msg } from "../actionCreators/SignupAC";
import Spinner from "react-bootstrap/Spinner";

class Home extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatch(get_users());
    }

    if (this.props.brands[0] === undefined) {
      this.props.dispatch(get_data());
    }
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
              {this.props.isLoggedIn &&
                (this.props.isLoading && (
                  <Spinner
                    animation="grow"
                    variant="warning"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      marginLeft: "10rem",
                      marginTop: "2rem"
                    }}
                  />
                ))}
              {this.props.isLoggedIn && (
                <>
                  {!this.props.isLoading &&
                    (this.props.currentUser.firstName !== undefined && ( //To check if state is empty...
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
                    ))}
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
    brands: state.brands,
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
