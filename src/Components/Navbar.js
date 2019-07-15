import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { change_input } from "../actionCreators/SignupAC";
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
              <Nav.Link>
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
            <Form inline>
              <NavLink to="/search">
                <FormControl
                  placeholder="Search"
                  className="mr-sm-2"
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
                <Button variant="outline-warning">Search</Button>
              </NavLink>
              <div style={{ marginLeft: "0.3rem" }} />
              {this.props.isLoggedIn && (
                <>
                  <NavLink to="/">
                    <Button
                      variant="outline-warning"
                      onClick={e => {
                        this.props.dispatch(change_input("isLoggedIn", false));
                      }}
                    >
                      Log Out
                    </Button>
                  </NavLink>
                </>
              )}
            </Form>
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
