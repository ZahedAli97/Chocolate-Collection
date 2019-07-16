import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

class Chocolates extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <br />{" "}
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
    chocolates: state.chocolates
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Chocolates);
