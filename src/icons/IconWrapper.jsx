import React from "react";
import {
  ForwardArrow,
  FolderIcon,
  FileIcon,
  JavascriptIcon,
  ReactIcon,
} from ".";
import "./IconWrapper.scss";

const IconWrapper = ({ type, className }) => {
  const mapTypeToIcon = {
    forwardArrow: <ForwardArrow />,
    folder: <FolderIcon />,
    file: <FileIcon />,
    jsx: <ReactIcon />,
    js: <JavascriptIcon />,
  };

  return mapTypeToIcon[type] ? (
    <div className={`icon-wrapper ${className}`}>{mapTypeToIcon[type]}</div>
  ) : (
    <div>icon type doesnt exist</div>
  );
};

export { IconWrapper };
