import React, { Component } from "react";
import { connect } from "react-redux";
import Chocolateitems from "./Chocolateitems";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Redirect } from "react-router-dom";

class Brandsdetail extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    const [brand] = this.props.brands.filter(
      brand => brand.id == this.props.match.params.id
    );
    const brandChocolates = this.props.chocolates.filter(
      chocolate => chocolate.brandId === brand.id
    );
    return (
      <>
        <br />
        <div className="container" style={{ paddingLeft: "5rem" }}>
          {brand !== undefined && (
            <>
              <Card
                style={{ width: "60rem", flex: "initial" }}
                className="bg-dark text-center text-warning shadow rounded"
                border="warning"
              >
                {" "}
                <Card.Body>
                  <Card.Title>{brand.name}</Card.Title>{" "}
                  <hr
                    style={{
                      border: "1px solid #ffbb33",
                      borderRadius: "5px"
                    }}
                  />{" "}
                  <blockquote className="blockquote mb-0 card-body">
                    {" "}
                    <p>{brand.desc}</p>
                  </blockquote>
                </Card.Body>
              </Card>
            </>
          )}
        </div>
        <div style={{ height: "1rem" }} />
        <div className="container" style={{ paddingLeft: "8rem" }}>
          <CardDeck>
            {brandChocolates !== undefined &&
              brandChocolates.map(chocolate => (
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
    brands: state.brands,
    chocolates: state.chocolates
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Brandsdetail);
