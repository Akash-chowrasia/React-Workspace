import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const AppButton = ({ label, className = "", link, path, onClick }) => {
  if (link)
    return (
      <Link className={`button ${className}`} to={path} onClick={() => onClick}>
        {label}
      </Link>
    );

  return (
    <button className={`button ${className}`} onClick={() => onClick}>
      {label}
    </button>
  );
};

export default AppButton;
