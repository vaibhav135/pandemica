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
              menu1
            </Link>
          </li>
          <li id="subnavli">
            <Link
              className={activeState === "menu2" ? "active" : ""}
              id="sublink"
              onClick={() => changeActiveStatus("menu2")}
              to={`${parentUrl}/menu2`}
            >
              menu2
            </Link>
          </li>
          <li id="subnavli">
            <Link
              className={activeState === "menu3" ? "active" : ""}
              id="sublink"
              onClick={() => changeActiveStatus("menu3")}
              to={`${parentUrl}/menu3`}
            >
              menu3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubNav;
