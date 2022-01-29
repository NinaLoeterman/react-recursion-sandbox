import React, { useState } from "react";
import IconWrapper from '../icons/IconWrapper';
import "./Folder.scss";

const Folder = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-container" onClick={toggleFolder}>
        <IconWrapper className={isOpen ? "caret-open" : ""} type='forwardArrow'/>
        <span>{name}</span>
      </div>
      {isOpen && items?.map((item) => {
        return (
          <Folder key={item.id} name={item.name} items={item.items} />
        )
      })}
    </div>
  );
};

export { Folder };
