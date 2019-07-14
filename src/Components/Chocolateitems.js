import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Chocolateitems extends Component {
  render() {
    return (
      <>
        <Link to={`/chocolatedetail/${this.props.id}`}>
          <img src={this.props.image} alt={this.props.name} />
        </Link>
        <h3>{this.props.name}</h3>
      </>
    );
  }
}
