import React, { Component } from "react";
import { connect } from "react-redux";
import Brandsitems from "./Brandsitems";
import { Redirect } from "react-router-dom";

class Brands extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {this.props.brands.map(brand => (
          <Brandsitems key={brand.id} {...brand} />
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    brands: state.brands
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Brands);
