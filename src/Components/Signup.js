import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  change_input,
  submit_form,
  get_users,
  set_error_msg
} from "../actionCreators/SignupAC";

class Signup extends React.Component {
  //   const [error_msg, setError_msg] = useState("");
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
    this.props.dispatch(get_users());
    // console.log(this.props);
    setTimeout(() => {
      // console.log(this.props);
      // console.log(this.props.users);
      const [user] = this.props.users.filter(
        user => user.email === this.props.email
      );
      if (user !== undefined) {
        if (this.props.email === user.email) {
          alert("Email already exists please signin");
          return false;
        }
      } else {
        return this.props.dispatch(submit_form(this.props));
      }
    }, 250);
  }
  render() {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)} noValidate>
          <label>First Name:</label>
          <input
            type="text"
            value={this.props.firstName}
            onChange={e => {
              this.props.dispatch(change_input("firstName", e.target.value));
            }}
          />
          {this.props.error_msg === "First Name is Required" && (
            <p>--{this.props.error_msg}</p>
          )}
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            value={this.props.lastName}
            onChange={e => {
              this.props.dispatch(change_input("lastName", e.target.value));
            }}
          />
          {this.props.error_msg === "Last Name is Required" && (
            <p>--{this.props.error_msg}</p>
          )}
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.props.email}
            onChange={e => {
              this.props.dispatch(change_input("email", e.target.value));
            }}
          />

          {this.props.error_msg === "Not a Valid Email" && (
            <p>--{this.props.error_msg}</p>
          )}

          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.props.password}
            onChange={e => {
              this.props.dispatch(change_input("password", e.target.value));
            }}
          />
          {this.props.error_msg === "Password is Required" && (
            <p>--{this.props.error_msg}</p>
          )}
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={this.props.confirmpassword}
            onChange={e => {
              this.props.dispatch(
                change_input("confirmpassword", e.target.value)
              );
            }}
          />
          {this.props.error_msg === "Wrong Confirm Passord" && (
            <p>--{this.props.error_msg}</p>
          )}
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    error_msg: state.errorMessage,
    loading: state.isLoading,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password,
    confirmpassword: state.confirmpassword,
    users: state.users
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Signup);
