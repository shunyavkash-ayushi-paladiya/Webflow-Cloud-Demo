import React from "react";

export default function TextFiled({
  id = "",
  name = "",
  placeholder = "",
  style = {},
  className = "",
}) {
  return (
    <input id={id} name={name} placeholder={placeholder} className={`p-2.5 outline-0 ${className}`} style={{ border: "1px solid white", ...style }} />
  );
}