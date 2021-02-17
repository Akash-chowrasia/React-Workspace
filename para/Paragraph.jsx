import React from "react";
import "./styles.scss";

const Para = ({ children,className="" }) => {
    return <p className={`para ${className}`}>{children}</p>;
  };
  
  
  export default Para;