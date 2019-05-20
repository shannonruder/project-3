import React from "react";
import "./style.css";

function Container(props) {
  return <main className="container"style={{ backgroundImage:  `url(${props.backgroundImage})`}}>
    {props.children}</main>;
}

export default Container;
