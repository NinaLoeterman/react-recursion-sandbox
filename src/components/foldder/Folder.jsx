import React, { useState } from "react";
import { CaretForwardOutline } from "react-ionicons";
import "./Folder.scss";

const Folder = ({ currentIteration, title = "folder" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return currentIteration > 5 ? null : (
    <div className="folder">
      <div className="folder-container" onClick={toggleFolder}>
        <CaretForwardOutline className={`${isOpen ? "caret-open" : ""} icon`} />
        <span>{title}</span>
      </div>
      <Folder currentIteration={++currentIteration} />
    </div>
  );
};

export { Folder };
