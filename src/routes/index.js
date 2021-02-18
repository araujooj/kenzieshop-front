import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
