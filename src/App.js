import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Reusable from "./Components/Reusable";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <Signup />
      <Reusable
        props={{
          message: "Chocopedia - A Cholcolate Collection App",
          tag: 18.72
        }}
      />
      <Reusable props={{ message: "An App by Ali", tag: 12 }} />
    </>
  );
}

export default App;
