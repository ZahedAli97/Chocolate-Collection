import React from "react";

export default function Reusable({ props }) {
  return (
    <p className={props.class} style={{ fontSize: props.tag }}>
      {props.message}
    </p>
  );
}
