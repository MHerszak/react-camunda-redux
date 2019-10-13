import React, { Fragment } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import { Navigation } from "./components";
import { routerComponents } from "./helper"
// import logo from "./logo.svg";
import "./App.css";


const App = () => (
  <Fragment>
    {/* render a navigation component */}
    <Navigation />
    {/* render routing logic of react-router-dom */}
    {/* apply switch for traversing router routs only once and use exact */}
    <div>
      <Switch>
        {routerComponents.map(route => (
          <Route
            key={route.to}
            path={route.to}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  </Fragment>
);

export default App;