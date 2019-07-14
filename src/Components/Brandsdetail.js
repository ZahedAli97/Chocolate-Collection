import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";

class Brandsdetail extends Component {
  render() {
    const [brand] = this.props.brands.filter(
      brand => brand.id == this.props.match.params.id
    );
    const brandChocolates = this.props.chocolates.filter(
      chocolate => chocolate.brandId === brand.id
    );
    return (
      <>
        {brand !== undefined && <h3>{brand.name}</h3>}
        {brand !== undefined && <p>{brand.desc}</p>}
        {brandChocolates !== undefined &&
          brandChocolates.map(chocolate => (
            <Chocolateitems key={chocolate.id} {...chocolate} />
          ))}
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

export default connectedComponent(Brandsdetail);
