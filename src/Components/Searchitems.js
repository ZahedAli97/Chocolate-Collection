import React, { Component } from "react";
import { connect } from "react-redux";
import Brandsitems from "./Brandsitems";
import Chocolateitems from "./Chocolateitems";
import { Redirect } from "react-router-dom";

class Searchitems extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    // const searchWordLength = this.props.searchWord.length;
    const chocolates = this.props.chocolates.filter(chocolate => {
      return chocolate.name.toLowerCase().includes(this.props.searchWord);
      //   return chocolate.name.slice(0, searchWordLength) == this.props.searchWord;
    });
    const brands = this.props.brands.filter(brand =>
      brand.name.toLowerCase().includes(this.props.searchWord)
    );

    return (
      <>
        <h1>Search Items- {this.props.searchWord}</h1>
        <h3>-----Chocolates-----</h3>
        {chocolates !== [] &&
          chocolates.map(chocolate => (
            <Chocolateitems key={chocolate.id} {...chocolate} />
          ))}
        {chocolates[0] === undefined && <p>No Matches</p>}
        <h3>-----Brands-----</h3>
        {brands[0] === undefined && <p>No Matches</p>}
        {brands !== [] &&
          brands.map(brand => <Brandsitems key={brand.id} {...brand} />)}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    brands: state.brands,
    chocolates: state.chocolates,
    searchWord: state.searchWord
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Searchitems);
