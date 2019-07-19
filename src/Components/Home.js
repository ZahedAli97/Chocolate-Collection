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
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

class Home extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      // To verify if the Log In id is Correct or Not.
      this.props.dispatch(get_users());
    }

    if (this.props.brands[0] === undefined && this.props.isLoggedIn) {
      //---On Page Reload the state will be empty, So fetch the data again.

      this.props.dispatch(get_data());
    }
  }
  render() {
    return (
      <>
        {/* Handling Server/DB access failure. */}
        {this.props.isLoggedIn && (
          <>
            {this.props.failingError !== "" && (
              <>
                {console.log("Hi")}
                <Accordion
                  className=" rounded"
                  style={{
                    width: "40rem",
                    height: "10rem",
                    marginLeft: "22rem",
                    marginTop: "7rem"
                  }}
                >
                  <Alert variant="danger" className="shadow-sm rounded">
                    <Alert.Heading>
                      Oh Snap! Looks like there was an Error!
                    </Alert.Heading>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <Button variant="outline-danger">More Info</Button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <hr />
                        The App Says -{this.props.failingError}
                      </Card.Body>
                    </Accordion.Collapse>
                    {/* <p>The App Says - {this.props.failingError}</p> */}
                  </Alert>
                </Accordion>
              </>
            )}
          </>
        )}

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
                {/* //--Till al the users are fetched don't allow the user to Login.  */}
                {!this.props.isLoggedIn && (
                  <>
                    {this.props.failingError !== "" && (
                      <>
                        {console.log("Hi")}
                        <Accordion
                          className="shadow-sm rounded"
                          style={{ marginRight: "4rem", marginTop: "7rem" }}
                        >
                          <Alert variant="danger">
                            <Alert.Heading>
                              Oh Snap! Looks like there was an Error!
                            </Alert.Heading>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <Button variant="outline-danger">
                                More Info
                              </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                <hr />
                                The App Says -{this.props.failingError}y
                              </Card.Body>
                            </Accordion.Collapse>
                            {/* <p>The App Says - {this.props.failingError}</p> */}
                          </Alert>
                        </Accordion>
                      </>
                    )}
                  </>
                )}{" "}
                {this.props.failingError === "" && (
                  <>
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
                  </>
                )}
                {/* //--Show <Login /> Component only if user is not Logged In and if the getUsers() have been Successfull */}
                {!this.props.isLoading && (!this.props.isLoggedIn && <Login />)}
              </Col>
            </Row>
          </Container>{" "}
        </div>
        <br />
        <Container>
          <Row>
            <Col lg={true}>
              {this.props.failingError === "" && (
                <>
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
                </>
              )}
              {/* //--Till all the data is fetched on Login. Display Spinner. */}

              {!this.props.isLoading && (this.props.isLoggedIn && <Types />)}
            </Col>
            {/* //--Till all the data is fetched on Login. Display Spinner. */}

            <Col md={4}>
              {this.props.failingError === "" && (
                <>
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
                </>
              )}
              {/* //--When Data has Loaded Welcome the user with his First Name and Last Name */}
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
                        {/* //-- Use react logo animations on own Image. */}
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
    currentUser: state.currentUser,
    failingError: state.failingError
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);
