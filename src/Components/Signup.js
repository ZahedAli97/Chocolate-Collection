import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  change_input,
  submit_form,
  get_users,
  set_error_msg,
  get_four_brands
} from "../actionCreators/SignupAC";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Link, Redirect } from "react-router-dom";
import { updateExpression } from "@babel/types";

import Accordion from "react-bootstrap/Accordion";

class Signup extends React.Component {
  //   const [error_msg, setError_msg] = useState("");
  componentDidMount() {
    // this.props.dispatch(get_four_brands());
    this.props.dispatch(get_users());
  }

  handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      this.props.dispatch(set_error_msg(""));
    }, 3000);

    // const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const reg = /.+@.+\.[A-Za-z]+$/;
    if (this.props.firstName === "") {
      this.props.dispatch(set_error_msg("First Name is Required"));
      //If name is empty
      return "false";
    }
    if (this.props.lastName === "") {
      this.props.dispatch(set_error_msg("Last Name is Required"));
      return "false";
    }
    if (!reg.test(this.props.email)) {
      this.props.dispatch(set_error_msg("Not a Valid Email"));
      return false;
    }
    const [user] = this.props.users.filter(
      user => user.email === this.props.email
    );
    if (user !== undefined) {
      if (this.props.email === user.email) {
        // alert("Email already exists please signin");
        this.props.dispatch(
          set_error_msg("Email already exists, Please Log In.")
        );
        return false;
      }
    }
    if (this.props.password === "") {
      this.props.dispatch(set_error_msg("Password is Required"));

      return false;
    }
    if (this.props.confirmpassword === "") {
      this.props.dispatch(set_error_msg("Wrong Confirm Passord"));
      return false;
    }
    if (this.props.password !== this.props.confirmpassword) {
      this.props.dispatch(set_error_msg("Wrong Confirm Passord"));
      return false;
    }

    return this.props.dispatch(submit_form(this.props));
  }
  render() {
    if (this.props.isLoggedIn) {
      //Even though there is no route....this is just a security measure.

      return <Redirect to="/" />;
    }
    return (
      <>
        <br />
        {/* Handling Server/DB access failure. */}
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

        {/* //--If there was No Successfull Signup. Then Display Sign Up Card. */}
        {this.props.failingError === "" && (
          <>
            {this.props.currentUser.firstName === undefined && (
              <>
                <Card
                  className="shadow-lg"
                  bg="white"
                  //text="white"
                  style={{
                    width: "25rem",
                    height: "37rem",
                    marginLeft: "30rem"
                  }}
                >
                  <Card.Header
                    className="text-center text-warning"
                    style={{ fontSize: "1.3rem" }}
                  >
                    SIGN UP
                  </Card.Header>
                  <Container>
                    <Form>
                      <form onSubmit={e => this.handleSubmit(e)} noValidate>
                        <Form.Group controlId="formGroupFirstName">
                          <Form.Label>First Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name..."
                            value={this.props.firstName}
                            onChange={e => {
                              this.props.dispatch(
                                change_input("firstName", e.target.value)
                              );
                            }}
                          />
                          {this.props.error_msg ===
                            "First Name is Required" && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formGroupLastName">
                          <Form.Label>Last Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name..."
                            value={this.props.lastName}
                            onChange={e => {
                              this.props.dispatch(
                                change_input("lastName", e.target.value)
                              );
                            }}
                          />
                          {this.props.error_msg === "Last Name is Required" && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email..."
                            value={this.props.email}
                            onChange={e => {
                              this.props.dispatch(
                                change_input("email", e.target.value)
                              );
                            }}
                          />
                          {this.props.error_msg ===
                            "Email already exists, Please Log In." && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                          {this.props.error_msg === "Not a Valid Email" && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                          <Form.Label>Password: </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password..."
                            value={this.props.password}
                            onChange={e => {
                              this.props.dispatch(
                                change_input("password", e.target.value)
                              );
                            }}
                          />
                          {this.props.error_msg === "Password is Required" && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                        </Form.Group>

                        <Form.Group controlId="formGroupConfirmPassword">
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Confirm Password..."
                            value={this.props.confirmpassword}
                            onChange={e => {
                              this.props.dispatch(
                                change_input("confirmpassword", e.target.value)
                              );
                            }}
                          />
                          {this.props.error_msg === "Wrong Confirm Passord" && (
                            <Alert variant="danger">
                              {this.props.error_msg}
                            </Alert>
                          )}
                        </Form.Group>

                        <div className="text-center">
                          {this.props.isLoading && (
                            <Spinner
                              animation="border"
                              variant="warning"
                              style={{
                                width: "3rem",
                                height: "3rem"
                              }}
                            />
                          )}
                          {!this.props.isLoading && (
                            <Button variant="warning" type="submit">
                              Sign Up
                            </Button>
                          )}{" "}
                        </div>
                      </form>
                    </Form>{" "}
                  </Container>
                </Card>
              </>
            )}
            {/* //-- When User has Successfully Signed update the current user to show Users */}
            {this.props.currentUser.firstName !== undefined && (
              <>
                {" "}
                <Alert
                  show={true}
                  style={{
                    width: "30rem",
                    height: "12rem",
                    marginLeft: "30rem"
                  }}
                  className="shadow rounded"
                >
                  <Alert.Heading>
                    {this.props.currentUser.firstName}{" "}
                    {this.props.currentUser.lastName}
                  </Alert.Heading>{" "}
                  <p />
                  You have been Successfully Signed Up!
                  <p />{" "}
                  <hr
                    style={{
                      border: "0.05rem solid #ffbb33",
                      borderRadius: "5px"
                    }}
                  />
                  <div className="d-flex justify-content-end">
                    <Link to="/">
                      <Button variant="outline-warning">Log In</Button>
                    </Link>
                  </div>
                </Alert>
              </>
            )}
          </>
        )}
        <br />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser,
    isLoading: state.isLoading,
    error_msg: state.errorMessage,
    loading: state.isLoading,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password,
    confirmpassword: state.confirmpassword,
    users: state.users,
    failingError: state.failingError
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Signup);
