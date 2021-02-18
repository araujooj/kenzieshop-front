import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Finish from "../pages/Finish";

import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/finish" component={Finish} />
      <Route path="/dashboard" component={Finish} isPrivate />
    </Switch>
  );
};

export default Routes;
