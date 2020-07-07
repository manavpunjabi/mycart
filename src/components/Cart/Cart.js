import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = ({ cart: { cart } }) => {
  return cart.length > 0 ? (
    <Fragment>
      <table className="table table-striped mt-2">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
        </tbody>
      </table>
      <div className="float-right">
        <Link to="/checkout" className="btn btn-success">
          Checkout
        </Link>
      </div>
    </Fragment>
  ) : (
    <div className="text-center">
      <h2 className="text-center">Your Cart is Empty</h2>
      <Link to="/" className="btn btn-primary">
        <i className="fas fa-home"></i> {""}
        Go to Homepage
      </Link>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Cart);
