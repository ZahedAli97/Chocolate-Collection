import React, { Component } from "react";
import { connect } from "react-redux";
import Brandsitems from "./Brandsitems";
import { Redirect } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

class Brands extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <>
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
        <div className="container" style={{ marginLeft: "10rem" }}>
          <CardDeck className="ml-5">
            {this.props.brands.map(brand => (
              <Brandsitems key={brand.id} {...brand} />
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
    brands: state.brands
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Brands);
