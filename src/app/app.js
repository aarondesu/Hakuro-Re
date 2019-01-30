import React from "react";
import { Switch, Route } from "react-router-dom";

import AppBar from "./components/app_bar";

import HomePage from "./pages/home_page";
import TestPage from "./pages/test_page";

const Application = props => (
  <React.Fragment>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={TestPage} />
    </Switch>
  </React.Fragment>
);

export default Application;
