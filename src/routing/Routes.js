import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/layout/NotFound";
import Cart from "../components/Cart/Cart";
import Alert from "../components/layout/Alert";
import Product from "../components/Product/Product";
import Checkout from "../components/Checkout";
import Buy from "../components/Buy";
const Routes = ({ component }) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/buy" component={Buy} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
