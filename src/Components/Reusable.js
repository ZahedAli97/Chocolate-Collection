//-- Reusing this Component for Footer, Actual idea was
// to use it for Header and Footer Until Navbar was Decided to be Header.

import React from "react";

export default function Reusable({ props }) {
  return (
    <p className={props.class} style={{ fontSize: props.tag }}>
      {props.message}
    </p>
  );
}
