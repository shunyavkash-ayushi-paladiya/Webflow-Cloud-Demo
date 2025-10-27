import React from "react";

export default function TextFiled({
  id = "",
  name = "",
  placeholder = "",
  style = {}
}) {
  return (
    <input id={id} name={name} placeholder={placeholder} style={{ border: "1px solid white", padding: 10, ...style }} />
  );
}