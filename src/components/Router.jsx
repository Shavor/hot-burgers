import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";
import NotFound from "./NotFound";
import Landing from "./Landing";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/restaurant/:restaurant" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
