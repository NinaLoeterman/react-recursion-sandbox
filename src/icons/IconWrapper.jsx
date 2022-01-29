import React from "react";
import { ForwardArrow, FolderIcon, FileIcon } from ".";
import "./IconWrapper.scss";

const IconWrapper = ({ type, className }) => {
  const mapTypeToIcon = {
    forwardArrow: <ForwardArrow />,
    folder: <FolderIcon />,
    file: <FileIcon />,
  };

  return mapTypeToIcon[type] ? (
    <div className={`icon-wrapper ${className}`}>{mapTypeToIcon[type]}</div>
  ) : (
    <div>icon type doesnt exist</div>
  );
};

export { IconWrapper };
