import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  change_input,
  logout,
  get_users,
  set_error_msg
} from "../actionCreators/SignupAC";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import logo from "../redchoco.png";

import Home from "./Home";

class ownNavbar extends React.Component {
  render() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
      <>
        <Navbar bg="white" variant="dark" expand="lg" className="shadow-sm">
          <Navbar.Brand>
            <NavLink to="/" className="text-warning">
              <img
                src={logo}
                className="App-logo text-center "
                alt="logo"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
              {"    CHOCOPEDIA"}
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" fill variant="tabs">
              <Nav.Link
                onClick={() => {
                  if (!this.props.isLoggedIn) {
                    this.props.dispatch(
                      set_error_msg("You Need to Log In First!")
                    );
                  }
                }}
              >
                <NavLink to="/" className="text-warning">
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/brands" className="text-warning">
                  BRANDS
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink to="/chocolates" className="text-warning">
                  CHOCOLATES
                </NavLink>
              </Nav.Link>
            </Nav>
            {isLoggedIn && (
              <>
                <Form inline>
                  <NavLink to="/search">
                    <FormControl
                      className="mr-sm-2"
                      placeholder="Search"
                      type="text"
                      value={this.props.searchWord}
                      onChange={e => {
                        this.props.dispatch(
                          change_input("searchWord", e.target.value)
                        );
                      }}
                    />
                  </NavLink>
                  {/* <NavLink to="/search">
                    <div
                      style={{
                        width: "5rem",
                        height: "2rem",
                        border: "0.05rem solid black"
                      }}
                      contentEditable
                      onMouseOver={e => {
                        e.target.textContent = "Hi";
                      }}
                      onChange={e => {
                        console.log(">>>HI");
                        e.target.style.visibility = "none";
                      }}
                    >
                      Search
                      <input
                        style={{ width: "5rem" }}
                        type="button"
                        variant="outline-warning"
                        onMouseOver={e => {
                          e.target.style.block = "block";
                          e.target.type = "text";
                          e.target.value = this.props.searchWord;
                          e.target.placeholder = "Search...";
                        }}
                        onChange={a => {
                          this.props.dispatch(
                            change_input("searchWord", a.target.value)
                          );
                        }}
                        onMouseOut={e => {
                          e.target.type = "button";
                          e.target.value = "Search";
                        }}
                      />
                    </div> 
                      </NavLink>*/}
                  <div style={{ marginLeft: "0.3rem" }} />

                  <NavLink to="/">
                    <Button
                      variant="outline-warning"
                      onClick={e => {
                        localStorage.clear();
                        this.props.dispatch(logout());
                        this.props.dispatch(get_users());
                      }}
                    >
                      Log Out
                    </Button>
                  </NavLink>
                </Form>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    searchWord: state.searchWord
  };
}

const connectedComponents = connect(mapStateToProps);

export default connectedComponents(ownNavbar);
