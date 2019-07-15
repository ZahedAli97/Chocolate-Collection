import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

class Chocolatedetails extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    const [chocolate] = this.props.chocolates.filter(
      chocolate => chocolate.id == this.props.match.params.id
    );
    const [brand] = this.props.brands.filter(
      brand => brand.id == chocolate.brandId
    );

    return (
      <>
        {" "}
        <br />
        <div className="container" style={{ paddingLeft: "20rem" }}>
          {chocolate !== undefined && (
            <>
              <Card
                style={{ width: "30rem", flex: "initial" }}
                className="bg-dark text-center text-warning shadow-lg rounded"
                border="warning"
              >
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  //style={{ width: "20rem" }}
                  src={chocolate.image}
                  alt={chocolate.name}
                />

                <Card.Body>
                  <Card.Title>{chocolate.name}</Card.Title>
                  <hr
                    style={{
                      border: "1px solid #ffbb33",
                      borderRadius: "5px"
                    }}
                  />
                  <blockquote className="blockquote mb-0 card-body">
                    <p>{chocolate.desc}</p>
                  </blockquote>
                </Card.Body>
                {brand !== undefined && (
                  <Card.Footer>
                    <Link to={`/brandsdetail/${brand.id}`}>
                      <p>Brand - {brand.name}</p>
                    </Link>
                  </Card.Footer>
                )}
              </Card>
            </>
          )}
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

export default connectedComponent(Chocolatedetails);
