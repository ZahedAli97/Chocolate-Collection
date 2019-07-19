import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { get_data, set_error_msg } from "../actionCreators/SignupAC";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

class Chocolates extends Component {
  componentDidMount() {
    //---On Page Reload the state will be empty, So fetch the data again.

    if (this.props.chocolates[0] === undefined) {
      this.props.dispatch(get_data());
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      // Allow User to View anything only if he is logged In. Else Redirect to Home.

      this.props.dispatch(set_error_msg("You Need to Log In First!"));
      return <Redirect to="/" />;
    }
    return (
      <>
        <br />
        {/* Handling Server/DB access failure. */}

        {this.props.isLoggedIn && (
          <>
            {this.props.failingError !== "" && (
              <>
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
        {/* {//--On Loading Show a Spinner.} */}
        {this.props.failingError === "" && (
          <>
            {this.props.isLoading && (
              <Spinner
                animation="border"
                variant="warning"
                style={{
                  width: "5rem",
                  height: "5rem",
                  marginLeft: "40rem",
                  marginTop: "10rem"
                }}
              />
            )}
          </>
        )}
        {/* //-- On all Chocolates in array. Choose one Chocolate and pass it as props to <Chocolateitems /> Component. */}
        <div className="container" style={{ paddingLeft: "10rem" }}>
          <CardDeck>
            {this.props.chocolates.map(chocolate => (
              <Chocolateitems key={chocolate.id} {...chocolate} />
            ))}
          </CardDeck>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    chocolates: state.chocolates,
    failingError: state.failingError
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Chocolates);
