import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Nav from "./nav";
import SubNavBar from "./subnavbar";

const Navbar = () => {
  return (
    <Router>
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <SubNavBar parentNav={"/home"} />
          </Route>
          <Route path="/news"></Route>
          <Route path="/blogs"></Route>
          <Route path="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
