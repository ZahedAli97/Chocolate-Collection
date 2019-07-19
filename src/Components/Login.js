import React, { Component } from "react";
import { connect } from "react-redux";
import {
  change_input,
  get_users,
  set_error_msg,
  submit_login_form
} from "../actionCreators/SignupAC";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    //--After Sign Up when the user is redirected to Login Page, Clear currentUser and Ask him/her to Login Again.
    this.props.dispatch(change_input("currentUser", {}));
  }
  handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      this.props.dispatch(set_error_msg(""));
    }, 3000);

    const [user] = this.props.users.filter(
      user => user.email === this.props.email
    );
    if (user === undefined) {
      this.props.dispatch(
        set_error_msg("Email does not exist, Please Sign Up.")
      );
      return false;
    }
    if (this.props.password !== user.password) {
      this.props.dispatch(set_error_msg("Incorrect Password"));
      return false;
    } else {
      this.props.dispatch(set_error_msg(""));
      localStorage.setItem("isLoggedIn", true); //--Store isLoggedIn in local Storage, So that when page is reloaded we can reload the state.
      localStorage.setItem("userId", user.id); //--Store userId to get user data.
      return this.props.dispatch(submit_login_form(user));
    }
  }
  render() {
    if (this.props.errorMessage !== "") {
      setTimeout(() => {
        //--To tiresome to Remove Error using onChange.
        this.props.dispatch(set_error_msg(""));
      }, 5000);
    }
    return (
      <>
        <Card
          className="shadow"
          bg="white"
          style={{ width: "25rem", height: "26rem", marginRight: "5rem" }}
        >
          <Card.Header
            className="text-center text-warning"
            style={{ fontSize: "1.3rem" }}
          >
            LOG IN
          </Card.Header>
          <Container>
            <Form>
              <form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.props.email}
                    onChange={e =>
                      this.props.dispatch(
                        change_input("loginEmail", e.target.value)
                      )
                    }
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={e =>
                      this.props.dispatch(
                        change_input("loginPassword", e.target.value)
                      )
                    }
                    required
                  />
                </Form.Group>
                {this.props.error_msg ===
                  "Email does not exist, Please Sign Up." && (
                  <Alert variant="danger">{this.props.error_msg}</Alert>
                )}
                {this.props.error_msg === "Incorrect Password" && (
                  <Alert variant="danger">{this.props.error_msg}</Alert>
                )}
                <div className="text-center">
                  <Button variant="warning" type="submit">
                    Log In
                  </Button>
                </div>
              </form>
            </Form>
            <hr
              style={{ border: "0.05rem solid #ffbb33", borderRadius: "5px" }}
            />
            <div className="text-center">
              <p>
                New User? - <Link to="/signup">Sign Up</Link>
              </p>
              {this.props.error_msg === "You Need to Log In First!" && (
                <Alert variant="danger">{this.props.error_msg}</Alert>
              )}
            </div>
          </Container>
        </Card>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.loginEmail,
    password: state.loginPassword,
    users: state.users,
    error_msg: state.errorMessage
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Login);
