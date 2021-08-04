import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubNav from "./subnav";
import ReportTable from "./report_table";
import ReportGraph from "./report_graph";
import Maps from "./maps";

const SubNavBar = ({ parentNav }: { parentNav: any }) => {
  console.log(`${parentNav}/maps`);
  return (
    <Router>
      <SubNav parentUrl={parentNav} />
      <Switch>
        <Route exact path={`${parentNav}`}>
          <ReportTable />{" "}
        </Route>
        <Route exact path={`${parentNav}/maps`}>
          <Maps />
        </Route>
        <Route exact path={`${parentNav}/graphs`}>
          <ReportGraph />
        </Route>
      </Switch>
    </Router>
  );
};

export default SubNavBar;
