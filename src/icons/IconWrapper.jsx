import React from "react";
import { ForwardArrow } from "./ForwardArrow";
import "./IconWrapper.scss";

const IconWrapper = ({ type, className }) => {
  const mapTypeToIcon = {
    forwardArrow: <ForwardArrow />,
  };

  return mapTypeToIcon[type] ? (
    <div className={`icon-wrapper ${className}`}>{mapTypeToIcon[type]}</div>
  ) : (
    <div>icon type doesnt exist</div>
  );
};

export default IconWrapper;
