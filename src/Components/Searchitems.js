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

class Searchitems extends Component {
  componentDidMount() {
    if (this.props.chocolates[0] === undefined) {
      this.props.dispatch(get_data());
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      //Even though there is no route....this is just a security measure.
      this.props.dispatch(set_error_msg("You Need to Log In First!"));

      return <Redirect to="/" />;
    }
    // const searchWordLength = this.props.searchWord.length;
    const chocolates = this.props.chocolates.filter(chocolate => {
      return chocolate.name.toLowerCase().includes(this.props.searchWord);
      //   return chocolate.name.slice(0, searchWordLength) == this.props.searchWord;
    });
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
        {!this.props.isLoading && (
          <div>
            <Card
              border="warning"
              className="bg-warning text-white text-center shadow"
            >
              <Card.Body style={{ fontSize: "22px" }}>CHOCOLATES</Card.Body>

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
    searchWord: state.searchWord
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Searchitems);
