import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";

import Application from "./app";
import { store } from "./store";

const renderApplication = Application => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Application />
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById("app")
  );
};

renderApplication(Application);

if (module.hot) {
  module.hot.accept("./app", () => {
    const nextApp = require("./app").default;
    renderApplication(nextApp);
  });
}
