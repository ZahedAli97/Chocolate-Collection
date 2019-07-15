import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Reusable from "./Components/Reusable";
import Signup from "./Components/Signup";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import Brands from "./Components/Brands";
import Brandsdetail from "./Components/Brandsdetail";
import Chocolates from "./Components/Chocolates";
import Chocolatedetails from "./Components/Chocolatedetails";
import Searchitems from "./Components/Searchitems";
import { Navbar as BootstrapNavbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <Route exact path="/" component={Home} />
      <Route exact path="/brands" component={Brands} />
      <Route
        exact
        path="/brandsdetail/:id"
        render={props => <Brandsdetail {...props} />}
      />
      <Route exact path="/chocolates" component={Chocolates} />
      <Route
        exact
        path="/chocolatedetail/:id"
        render={props => <Chocolatedetails {...props} />}
      />
      <Route exact path="/search" component={Searchitems} />
      <Route path="/signup" component={Signup} />
      <br />
      <br />
      <br />
      <div>
        {/* <hr
          style={{
            marginTop: "385px",
            width: "85%",
            border: "0.02rem solid #ffbb33",
            borderRadius: "5px"
          }}
        /> */}
        <BootstrapNavbar
          fixed="bottom"
          bg="white"
          variant="dark"
          expand="lg"
          className="shadow-top"
          style={{
            boxShadow: "0 0 5px  #d8d2c7"
          }}
        >
          <Reusable
            props={{
              message: "Chocopedia - A Cholcolate Collection App",
              tag: 18.72,
              class: "text-warning"
            }}
          />
          <hr />
          <Reusable
            props={{
              message: "An App by Ali",
              tag: 15,
              class: "pull-right text-warning"
            }}
          />
        </BootstrapNavbar>
      </div>
    </>
  );
}

export default App;
