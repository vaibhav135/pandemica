import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./nav";

const Navbar = () => {
  return (
    <Router>
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home"></Route>
          <Route path="/news"></Route>
          <Route path="/blogs"></Route>
          <Route path="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
