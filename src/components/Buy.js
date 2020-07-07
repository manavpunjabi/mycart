import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <Fragment>
      <h1 class="display-1 text-center">
        <i class="fas fa-check"></i> Your order is confirmed
      </h1>

      <div class="text-center">
        <Link class="btn btn-info m-*-auto" to="/">
          <i class="fas fa-shopping-bag"></i> Continue Shopping
        </Link>
      </div>
    </Fragment>
  );
};

export default Buy;
