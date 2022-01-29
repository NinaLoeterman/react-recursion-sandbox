import React, { useState } from "react";
import { IconWrapper } from "../icons/IconWrapper.jsx";
import "./Folder.scss";

const Folder = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const icons = () => {
    if (items?.length) {
      return (
        <>
          <IconWrapper
            className={isOpen ? "caret-open" : ""}
            type="forwardArrow"
          />
          <IconWrapper type="folder" />
        </>
      );
    } else {
      const fileSplit = name.includes(".") && name.split(".");
      const fileType = fileSplit[fileSplit.length - 1];
      return <IconWrapper type={fileType || "file"} />;
    }
  };

  return (
    <div className="folder">
      <div className="folder-container" onClick={toggleFolder}>
        {icons()}
        <span>{name}</span>
      </div>
      {isOpen &&
        items?.map((item) => {
          const props = { key: item.id, name: item.name, items: item.items };
          return <Folder {...props} />;
        })}
    </div>
  );
};

export { Folder };
