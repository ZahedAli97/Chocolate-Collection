import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

class Chocolates extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <br />
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
    isLoggedIn: state.isLoggedIn,
    chocolates: state.chocolates
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Chocolates);
