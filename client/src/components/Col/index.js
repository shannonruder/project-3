import React from "../../../node_modules/react";
import "../Styles/index.css";


function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={`${size} customCol`} {...props} />;
}

export default Col;
