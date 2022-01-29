import React, { useState } from "react";
import IconWrapper from "../icons/IconWrapper";
import "./Folder.scss";

const Folder = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-container" onClick={toggleFolder}>
        {items?.length ? (
          <IconWrapper
            className={isOpen ? "caret-open" : ""}
            type="forwardArrow"
          />
        ) : (
          <IconWrapper type="file" />
        )}
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
