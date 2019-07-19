import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Redirect } from "react-router-dom";
import { get_data, set_error_msg } from "../actionCreators/SignupAC";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

class Brandsdetail extends Component {
  componentDidMount() {
    //---On Page Reload the state will be empty, So fetch the data again.

    if (this.props.brands[0] === undefined) {
      this.props.dispatch(get_data());
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      // Allow User to View anything only if he is logged In. Else Redirect to Home.

      this.props.dispatch(set_error_msg("You Need to Log In First!"));
      return <Redirect to="/" />;
    }
    // Filter Brand using Id given in URL - props.match.params.id - (props by router)
    const [brand] = this.props.brands.filter(
      brand => brand.id == this.props.match.params.id
    );
    // Filter Chocolates that has the same brand Id.
    const brandChocolates = this.props.chocolates.filter(
      chocolate => chocolate.brandId === brand.id
    );
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
                    marginTop: "8rem"
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
        <div className="container" style={{ paddingLeft: "5rem" }}>
          {/* //-- Display brand details. On all Chocolates that belong to brand, Choose one chocolate
           and pass it as props to Branditems Component. */}

          {brand !== undefined && (
            <>
              <Card
                style={{ width: "60rem", flex: "initial" }}
                className="bg-dark text-center text-warning shadow rounded"
                border="warning"
              >
                {" "}
                <Card.Body>
                  <Card.Title>{brand.name}</Card.Title>{" "}
                  <hr
                    style={{
                      border: "1px solid #ffbb33",
                      borderRadius: "5px"
                    }}
                  />{" "}
                  <blockquote className="blockquote mb-0 card-body">
                    {" "}
                    <p>{brand.desc}</p>
                  </blockquote>
                </Card.Body>
              </Card>
            </>
          )}
        </div>
        <div style={{ height: "1rem" }} />
        <div className="container" style={{ paddingLeft: "8rem" }}>
          <CardDeck>
            {brandChocolates !== undefined &&
              brandChocolates.map(chocolate => (
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
    brands: state.brands,
    chocolates: state.chocolates,
    failingError: state.failingError
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Brandsdetail);
