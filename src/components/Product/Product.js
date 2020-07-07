import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProduct } from "../../actions/product";
import Spinner from "../layout/Spinner";
import { addToCart } from "../../actions/cart";
const Product = ({
  product: { loading, singleProduct },
  loadProduct,
  match,
  addToCart,
}) => {
  useEffect(() => {
    loadProduct(match.params.id);
  }, [loadProduct, match.params.id]);
  const onClick = (e) => {
    addToCart(singleProduct);
  };
  return loading ? (
    <Spinner />
  ) : (
    <main className="mt-1 pt-1">
      <div className="container dark-grey-text mt-5">
        <div className="row wow fadeIn">
          <div className="col-md-6 mb-4">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4">
              <h3>{singleProduct.title} </h3>
              <p className="lead">
                <span>₹ {singleProduct.price}</span>
              </p>
              <p className="lead font-weight-bold">Description:-</p>
              <p>{singleProduct.description}</p>
              <button className="btn btn-success float-right" onClick={onClick}>
                <i class="fas fa-cart-plus"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  loadProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { loadProduct, addToCart })(Product);
