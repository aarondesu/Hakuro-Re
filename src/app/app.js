import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home_page";

const Application = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </React.Fragment>
);

export default Application;
