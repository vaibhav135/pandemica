import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./nav";
import News from "./news";
import SubNavBar from "./subnavbar";
import CovidGuideLines from "./covid_guidelines";
import About from "./abouts";

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
          <Route path="/news">
            <News />
          </Route>
          <Route path="/covid-guidelines">
            <CovidGuideLines />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
