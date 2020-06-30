import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NewMessage from "./views/NewMessage";
import NotFound from "./views/NotFound";

const Routes = ({ msgList, postMessages, alert }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home msgList={msgList} alert={alert} />}
        />
        <Route
          exact
          path="/new-message"
          render={() => <NewMessage postMessages={postMessages} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
