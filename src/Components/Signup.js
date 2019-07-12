import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  change_input,
  submit_form,
  get_users
} from "../actionCreators/SignupAC";

class Signup extends React.Component {
  //   const [error_msg, setError_msg] = useState("");
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    setTimeout(() => {
      //   setError_msg("");
    }, 3000);

    // const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const reg = /.+@.+\.[A-Za-z]+$/;
    if (this.props.firstName === "") {
      //   setError_msg("First Name is Required");
      //If name is empty
      return "false";
    }
    if (this.props.lastName === "") {
      //   setError_msg("Last Name is Required");
      //If name is empty
      return "false";
    }
    if (!reg.test(this.props.email)) {
      //   setError_msg("Not a Valid Email");
      return false;
    }
    if (this.props.password === "") {
      //   setError_msg("Password is Required");
      return false;
    }
    if (this.props.confirmpassword === "") {
      //   setError_msg("Wrong Confirm Passord");
      return false;
    }
    if (this.props.password !== this.props.confirmpassword) {
      //   setError_msg("Wrong Confirm Passord");
      return false;
    }
    this.props.dispatch(get_users());
    console.log(this.props);
    setTimeout(() => {
      console.log(this.props);
      console.log(this.props.users);
      const [user_email] = this.props.users.filter(
        user => user.email === this.props.email
      );
      console.log("USER", user_email);
      if (user_email !== undefined) {
        console.log("Hiiiiiiiiiiiiiiiii", user_email.email);
        if (this.props.email === user_email.email) {
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
          {/* {error_msg === "First Name is Required" && <p>--{error_msg}</p>} */}
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            value={this.props.lastName}
            onChange={e => {
              this.props.dispatch(change_input("lastName", e.target.value));
            }}
          />
          {/* {error_msg === "Last Name is Required" && <p>--{error_msg}</p>} */}
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.props.email}
            onChange={e => {
              this.props.dispatch(change_input("email", e.target.value));
            }}
          />

          {/* {error_msg === "Not a Valid Email" && <p>--{error_msg}</p>} */}

          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.props.password}
            onChange={e => {
              this.props.dispatch(change_input("password", e.target.value));
            }}
          />
          {/* {error_msg === "Password is Required" && <p>--{error_msg}</p>} */}
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
          {/* {error_msg === "Wrong Confirm Passord" && <p>--{error_msg}</p>} */}
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
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
