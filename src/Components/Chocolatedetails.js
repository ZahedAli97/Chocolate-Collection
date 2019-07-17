import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { get_data, set_error_msg } from "../actionCreators/SignupAC";
import Spinner from "react-bootstrap/Spinner";

class Chocolatedetails extends Component {
  componentDidMount() {
    if (this.props.chocolates[0] === undefined) {
      this.props.dispatch(get_data());
    }
  }
  render() {
    if (!this.props.isLoggedIn) {
      this.props.dispatch(set_error_msg("You Need to Log In First!"));

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
        <br />{" "}
        {this.props.isLoading && (
          <Spinner
            animation="border"
            variant="warning"
            style={{
              width: "5rem",
              height: "5rem",
              marginLeft: "40rem",
              marginTop: "10rem"
            }}
          />
        )}
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
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    brands: state.brands,
    chocolates: state.chocolates
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Chocolatedetails);
