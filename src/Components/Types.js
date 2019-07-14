import React, { Component } from "react";
import { connect } from "react-redux";

class Types extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.types.map(type => (
            <li key={type.id}>{type.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Types);
