import React from "react";

export default function Reusable({ props }) {
  return <p style={{ fontSize: props.tag }}>{props.message}</p>;
}
