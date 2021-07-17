import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SubNav from "./subnav";

const SubNavBar = ({ parentNav }: { parentNav: any }) => {
  return (
    <Router>
      <SubNav parentUrl={parentNav} />
      <Switch>
        <Route path={`${parentNav}`}> </Route>
        <Route path={`${parentNav}/menu2`}></Route>
        <Route path={`${parentNav}/menu3`}> </Route>
      </Switch>
    </Router>
  );
};

export default SubNavBar;
