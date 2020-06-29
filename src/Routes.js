import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
