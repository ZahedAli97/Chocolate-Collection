import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Chocolatedetails extends Component {
  render() {
    const [chocolate] = this.props.chocolates.filter(
      chocolate => chocolate.id == this.props.match.params.id
    );
    const [brand] = this.props.brands.filter(
      brand => brand.id == chocolate.brandId
    );

    return (
      <>
        {chocolate !== undefined && <h3>{chocolate.name}</h3>}
        {chocolate !== undefined && <p>{chocolate.desc}</p>}
        {brand !== undefined && (
          <Link to={`/brandsdetail/${brand.id}`}>
            <p>Brand - {brand.name}</p>
          </Link>
        )}
        {chocolate !== undefined && (
          <img src={chocolate.image} alt={chocolate.name} />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    brands: state.brands,
    chocolates: state.chocolates
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Chocolatedetails);
