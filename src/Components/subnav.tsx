import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Style/subnav.css";

const SubNav = ({ parentUrl }: { parentUrl: any }) => {
  const [activeState, setActiveState] = useState(parentUrl);

  function changeActiveStatus(strStatus: string) {
    setActiveState(strStatus);
  }
  return (
    <header>
      <nav className="subNav">
        <ul className="SubNavUl">
          <li id="subnavli">
            <Link
              className={activeState === parentUrl ? "active" : ""}
              id="sublink"
              onClick={() => changeActiveStatus(parentUrl)}
              to={`${parentUrl}`}
            >
              Tables
            </Link>
          </li>
          <li id="subnavli">
            <Link
              className={activeState === "maps" ? "active" : ""}
              id="sublink"
              onClick={() => changeActiveStatus("maps")}
              to={`${parentUrl}/maps`}
            >
              Maps
            </Link>
          </li>
          <li id="subnavli">
            <Link
              className={activeState === "graphs" ? "active" : ""}
              id="sublink"
              onClick={() => changeActiveStatus("graphs")}
              to={`${parentUrl}/graphs`}
            >
              Graphs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubNav;
