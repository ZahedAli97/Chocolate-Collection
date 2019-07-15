/* eslint-disable no-lone-blocks */
// -------------From Navbar.js--------------
{
  /* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={Home}>Navbar</Navbar.Brand>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/brands">BRANDS</NavLink>
            </li>
            <li>
              <NavLink to="/chocolates">CHOCOLATES</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SIGN UP</NavLink>
            </li>
            <li>
              <form>
                <NavLink to="/search">
                  <input
                    type="text"
                    value={this.props.searchWord}
                    onChange={e => {
                      this.props.dispatch(
                        change_input("searchWord", e.target.value)
                      );
                    }}
                  />
                </NavLink>
                <NavLink to="/search">
                  <input type="submit" value="search" />
                </NavLink>
              </form>
            </li>
          </ul>
        </Navbar> */
}

// ---------------------Home.js-------------
{
  /* <>
        <Types />
        {!this.props.isLoggedIn && <Login />}
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
      </> */
}

//--------------Login.js------------------

{
  /* <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Email:</label>
          <input
            type="email"
            value={this.props.email}
            onChange={e =>
              this.props.dispatch(change_input("loginEmail", e.target.value))
            }
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={this.props.password}
            onChange={e =>
              this.props.dispatch(change_input("loginPassword", e.target.value))
            }
            required
          />
          <br />
          {this.props.error_msg === "Email does not exist, Please Sign Up." && (
            <p>--{this.props.error_msg}</p>
          )}
          {this.props.error_msg === "Incorrect Password" && (
            <p>--{this.props.error_msg}</p>
          )}
          <input type="submit" value="LOGIN" />
        </form>
      </> */
}

//-------------Home.js------------

{
  /* <>
        <Types />
        {!this.props.isLoggedIn && <Login />}
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
      </> */
}

//-------------------Brandsitems.js---------------------
{
  /* <>
<Link to={`/brandsdetail/${this.props.id}`}>
  <img src={this.props.logo} alt={this.props.name} />
</Link>
<h3>{this.props.name}</h3>
</> */
}

//------------------Chocolateitems.js---------------------
{
  /* <>
<Link to={`/chocolatedetail/${this.props.id}`}>
  <img src={this.props.image} alt={this.props.name} />
</Link>
<h3>{this.props.name}</h3>
</> */
}

//------------------Brandsdetail.js-------------------------
{
  /* <>
{brand !== undefined && <h3>{brand.name}</h3>}
{brand !== undefined && <p>{brand.desc}</p>}
{brandChocolates !== undefined &&
  brandChocolates.map(chocolate => (
    <Chocolateitems key={chocolate.id} {...chocolate} />
  ))}
</> */
}

//--------------------Signup .js-------------------------------
// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import {
//   change_input,
//   submit_form,
//   get_users,
//   set_error_msg
// } from "../actionCreators/SignupAC";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

// class Signup extends React.Component {
//   //   const [error_msg, setError_msg] = useState("");
//   handleSubmit(e) {
//     e.preventDefault();

//     setTimeout(() => {
//       this.props.dispatch(set_error_msg(""));
//     }, 3000);

//     // const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
//     const reg = /.+@.+\.[A-Za-z]+$/;
//     if (this.props.firstName === "") {
//       this.props.dispatch(set_error_msg("First Name is Required"));
//       //If name is empty
//       return "false";
//     }
//     if (this.props.lastName === "") {
//       this.props.dispatch(set_error_msg("Last Name is Required"));
//       return "false";
//     }
//     if (!reg.test(this.props.email)) {
//       this.props.dispatch(set_error_msg("Not a Valid Email"));
//       return false;
//     }
//     if (this.props.password === "") {
//       this.props.dispatch(set_error_msg("Password is Required"));

//       return false;
//     }
//     if (this.props.confirmpassword === "") {
//       this.props.dispatch(set_error_msg("Wrong Confirm Passord"));
//       return false;
//     }
//     if (this.props.password !== this.props.confirmpassword) {
//       this.props.dispatch(set_error_msg("Wrong Confirm Passord"));
//       return false;
//     }
//     this.props.dispatch(get_users());
//     // console.log(this.props);
//     setTimeout(() => {
//       // console.log(this.props);
//       // console.log(this.props.users);
//       const [user] = this.props.users.filter(
//         user => user.email === this.props.email
//       );
//       if (user !== undefined) {
//         if (this.props.email === user.email) {
//           alert("Email already exists please signin");
//           return false;
//         }
//       } else {
//         return this.props.dispatch(submit_form(this.props));
//       }
//     }, 250);
//   }
//   render() {
//     return (
//       <>
//         <br />
//         <div
//           className="shadow-lg  mb-5 bg-white "
//           style={{ width: "25rem", height: "37rem" }}
//         >
//           <Card
//             className="shadow"
//             bg="dark"
//             text="white"
//             style={{ width: "25rem", height: "37rem" }}
//           >
//             <Card.Header
//               className="text-center text-warning"
//               style={{ fontSize: "1.3rem" }}
//             >
//               SIGN UP
//             </Card.Header>
//             <Container>
//               <Form>
//                 <form onSubmit={e => this.handleSubmit(e)} noValidate>
//                   <Form.Group controlId="formGroupFirstName">
//                     <Form.Label>First Name:</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter First Name..."
//                       value={this.props.firstName}
//                       onChange={e => {
//                         this.props.dispatch(
//                           change_input("firstName", e.target.value)
//                         );
//                       }}
//                     />
//                     {this.props.error_msg === "First Name is Required" && (
//                       <Alert variant="danger">{this.props.error_msg}</Alert>
//                     )}
//                   </Form.Group>

//                   <Form.Group controlId="formGroupLastName">
//                     <Form.Label>Last Name:</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Last Name..."
//                       value={this.props.lastName}
//                       onChange={e => {
//                         this.props.dispatch(
//                           change_input("lastName", e.target.value)
//                         );
//                       }}
//                     />
//                     {this.props.error_msg === "Last Name is Required" && (
//                       <Alert variant="danger">{this.props.error_msg}</Alert>
//                     )}
//                   </Form.Group>

//                   <Form.Group controlId="formGroupEmail">
//                     <Form.Label>Email:</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter Email..."
//                       value={this.props.email}
//                       onChange={e => {
//                         this.props.dispatch(
//                           change_input("email", e.target.value)
//                         );
//                       }}
//                     />

//                     {this.props.error_msg === "Not a Valid Email" && (
//                       <Alert variant="danger">{this.props.error_msg}</Alert>
//                     )}
//                   </Form.Group>

//                   <Form.Group controlId="formGroupPassword">
//                     <Form.Label>Password: </Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter Password..."
//                       value={this.props.password}
//                       onChange={e => {
//                         this.props.dispatch(
//                           change_input("password", e.target.value)
//                         );
//                       }}
//                     />
//                     {this.props.error_msg === "Password is Required" && (
//                       <Alert variant="danger">{this.props.error_msg}</Alert>
//                     )}
//                   </Form.Group>

//                   <Form.Group controlId="formGroupConfirmPassword">
//                     <Form.Label>Confirm Password:</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter Confirm Password..."
//                       value={this.props.confirmpassword}
//                       onChange={e => {
//                         this.props.dispatch(
//                           change_input("confirmpassword", e.target.value)
//                         );
//                       }}
//                     />
//                     {this.props.error_msg === "Wrong Confirm Passord" && (
//                       <Alert variant="danger">{this.props.error_msg}</Alert>
//                     )}
//                   </Form.Group>

//                   <div className="text-center">
//                     <Button variant="warning" type="submit">
//                       Sign Up
//                     </Button>{" "}
//                   </div>
//                 </form>
//               </Form>{" "}
//             </Container>
//           </Card>
//         </div>
//         <br />
//       </>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     error_msg: state.errorMessage,
//     loading: state.isLoading,
//     firstName: state.firstName,
//     lastName: state.lastName,
//     email: state.email,
//     password: state.password,
//     confirmpassword: state.confirmpassword,
//     users: state.users
//   };
// }

// const connectedComponent = connect(mapStateToProps);

// export default connectedComponent(Signup);

//------------------------Signupsaga.js-------------------
// import { put } from "redux-saga/effects";
// import {
//   submit_form_success,
//   submit_form_failure,
//   get_users_failure,
//   get_users_success,
//   submit_login_form_failure,
//   submit_login_form_success
// } from "../actionCreators/SignupAC";

// export function* signupSaga(action) {
//   try {
//     const { firstName, lastName, email, password } = action.payload;
//     const body = { firstName, lastName, email, password };
//     const submitResponse = yield fetch("http://localhost:4000/users", {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json"
//         // Noting the db that package is of type json
//       }
//     });

//     const user = yield submitResponse.json();
//     yield put(submit_form_success(user));
//   } catch (error) {
//     yield put(submit_form_failure(error));
//   }
// }

// export function* getUsersSaga() {
//   try {
//     const userResponse = yield fetch("http://localhost:4000/users");
//     const users = yield userResponse.json();
//     yield put(get_users_success(users));
//   } catch (error) {
//     yield put(get_users_failure(error));
//   }
// }

// export function* loginUserSaga() {
//   try {
//     const chocolateResponse = yield fetch("http://localhost:4000/chocolates");
//     const chocolates = yield chocolateResponse.json();

//     const typesResponse = yield fetch("http://localhost:4000/types");
//     const types = yield typesResponse.json();

//     const brandsResponse = yield fetch("http://localhost:4000/brands");
//     const brands = yield brandsResponse.json();

//     yield put(submit_login_form_success(chocolates, types, brands));
//   } catch (err) {
//     yield put(submit_login_form_failure(err));
//   }
// }
