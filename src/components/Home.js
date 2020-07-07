import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../actions/product";
import PropTypes from "prop-types";
import ProductItem from "./Product/ProductItem";
import Spinner from "../components/layout/Spinner";
import Filter from "../components/Product/Filter";
import Sort from "../components/Product/Sort";
import Search from "../components/Product/Search";
const Home = ({ product: { products, loading }, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-6 col-lg-2">
            <Search />
            <Filter />
            <Sort />
          </div>
          <div className="col-sm-3 col-md-6 col-lg-10">
            <div className="card-deck">
              {products.map((product) => (
                <ProductItem product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

Home.propTypes = {
  product: PropTypes.object.isRequired,
  loadProducts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadProducts })(Home);
