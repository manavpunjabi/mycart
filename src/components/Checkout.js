import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { clearCart } from "../actions/cart";
const Checkout = ({ cart: { cart, total }, clearCart }) => {
  return cart.length > 0 ? (
    <Fragment>
      <table className="table mt-2">
        <thead>
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
        <h3>Total Price</h3>
        <h2>₹ {total}</h2>
        <div className="float-right">
          <Link
            onClick={(e) => clearCart()}
            to="/buy"
            className="btn btn-primary"
          >
            Buy
          </Link>
        </div>
      </div>
    </Fragment>
  ) : (
    <Redirect to="/cart" />
  );
};

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  clearCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { clearCart })(Checkout);
