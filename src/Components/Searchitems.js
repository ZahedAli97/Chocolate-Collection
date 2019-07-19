import React, { Component } from "react";
import { connect } from "react-redux";
import Brandsitems from "./Brandsitems";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { get_data, set_error_msg } from "../actionCreators/SignupAC";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

class Searchitems extends Component {
  componentDidMount() {
    if (this.props.chocolates[0] === undefined) {
      this.props.dispatch(get_data());
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      //Even though this Component is not present when user is not Logged In....this is just a security measure.
      this.props.dispatch(set_error_msg("You Need to Log In First!"));

      return <Redirect to="/" />;
    }

    //--Filter all the Chocolates that include the Search Word.
    const chocolates = this.props.chocolates.filter(chocolate => {
      return chocolate.name.toLowerCase().includes(this.props.searchWord);
    });
    //--Filter all the Brands that include the Search Word.
    const brands = this.props.brands.filter(brand =>
      brand.name.toLowerCase().includes(this.props.searchWord)
    );

    return (
      <>
        <div style={{ marginLeft: "30rem" }}>
          <br />
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="mr-auto">Search - Word:</strong>{" "}
              <Toast.Body>{this.props.searchWord}</Toast.Body>{" "}
            </Toast.Header>
          </Toast>
        </div>
        <br />
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
                    marginLeft: "24rem",
                    marginTop: "6rem"
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
        {/* If user reloads the page getData() again, and show Spinner until the Data is Loaded in State. */}
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
        {!this.props.isLoading && (
          <div>
            <Card
              border="warning"
              className="bg-warning text-white text-center shadow"
            >
              <Card.Body style={{ fontSize: "22px" }}>CHOCOLATES</Card.Body>
              {/* If there are no filtered matches. */}
              {chocolates[0] === undefined && (
                <Card.Footer>No Matches</Card.Footer>
              )}
            </Card>
            <br />
            <CardDeck style={{ marginLeft: "1rem" }}>
              {chocolates !== [] &&
                chocolates.map(chocolate => (
                  <Chocolateitems key={chocolate.id} {...chocolate} />
                ))}
            </CardDeck>
            <br />
            <Card
              border="warning"
              className="bg-warning text-white text-center shadow"
            >
              <Card.Body style={{ fontSize: "22px" }}>BRANDS</Card.Body>
              {/* If there are no filtered matches. */}

              {brands[0] === undefined && <Card.Footer>No Matches</Card.Footer>}
            </Card>
            <br />
            <CardDeck style={{ marginLeft: "1rem" }}>
              {brands !== [] &&
                brands.map(brand => <Brandsitems key={brand.id} {...brand} />)}
            </CardDeck>
          </div>
        )}
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
    searchWord: state.searchWord,
    failingError: state.failingError
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Searchitems);
