import React, { useState, useRef } from "react";
import {IconChevronDown} from './svgs'

import "./Accordion.scss";

function Drawer(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("drawerIcon");

  const content = useRef(null);


  function toggleDrawer() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "drawerIcon" : "drawerIcon rotate"
    );
  }

  return (
    <div className="drawerSection">
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="drawerContent"
      >
        <div className="drawerText">{props.content}</div>
        <div
          className="drawerText"
          dangerouslySetInnerHTML={{ __html: props.featuresList }}
        />
      </div>
      <div className="buttonWrapper">
        <button className={`drawer ${setActive}`} onClick={toggleDrawer}>
            <IconChevronDown className={`${setRotate}`}/>
        </button>
      </div>
    </div>
  );
}

export default Drawer;
