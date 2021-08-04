import React, { useState } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import "../Style/nav.css";

const Nav = () => {
  const [activeState, setActiveState] = useState("Home");

  function changeActiveStatus(strStatus: string) {
    setActiveState(strStatus);
  }

  return (
    <header>
      <nav>
        <ul className="NavUl">
          <li id="navli">
            <Link to="/">
              <Redirect to="/home" />
            </Link>
          </li>
          <li id="navli">
            <Link
              id="link"
              className={activeState === "Home" ? "active" : ""}
              onClick={() => changeActiveStatus("Home")}
              to="/home"
            >
              Reports
            </Link>
          </li>
          <li id="navli">
            <Link
              id="link"
              className={activeState === "News" ? "active" : ""}
              onClick={() => changeActiveStatus("News")}
              to="/news"
            >
              News
            </Link>
          </li>
          <li id="navli">
            <Link
              id="link"
              className={activeState === "CovidGuideLines" ? "active" : ""}
              onClick={() => changeActiveStatus("CovidGuideLines")}
              to="/covid-guidelines"
            >
              Covid-Guidelines
            </Link>
          </li>
          <li id="navli">
            <Link
              id="link"
              className={activeState === "About" ? "active" : ""}
              onClick={() => changeActiveStatus("About")}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
