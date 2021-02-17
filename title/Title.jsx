import React from "react";
import "./styles.scss";

const Title = ({ title = "" }) => {
  return <h2 className="title">{title}</h2>;
};

export default Title;
