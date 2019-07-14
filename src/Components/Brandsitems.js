import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Brandsitems extends Component {
  render() {
    return (
      <>
        <Link to={`/brandsdetail/${this.props.id}`}>
          <img src={this.props.logo} alt={this.props.name} />
        </Link>
        <h3>{this.props.name}</h3>
      </>
    );
  }
}
