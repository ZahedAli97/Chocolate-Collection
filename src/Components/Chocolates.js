import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";

class Chocolates extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {this.props.chocolates.map(chocolate => (
          <Chocolateitems key={chocolate.id} {...chocolate} />
        ))}
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
