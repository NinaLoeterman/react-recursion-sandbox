import React, { useState } from "react";
import IconWrapper from '../icons/IconWrapper';
import "./Folder.scss";

const Folder = ({ currentIteration, folderTree }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return currentIteration > 5 ? null : (
    <div className="folder">
      <div className="folder-container" onClick={toggleFolder}>
        <IconWrapper className={isOpen ? "caret-open" : ""} type='forwardArrow'/>
        <span>Folder</span>
      </div>
      <Folder isOpenFolder={false} folderTree={folderTree} currentIteration={++currentIteration} />
    </div>
  );
};

export { Folder };
