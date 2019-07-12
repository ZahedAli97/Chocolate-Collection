import React from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Home />
        </li>
        <li>
          <Login />
        </li>
        {/* <li>
          <Signup />
        </li> */}
      </ul>
    </>
  );
}
