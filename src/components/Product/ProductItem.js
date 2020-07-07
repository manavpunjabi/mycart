import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = ({
  product: { image, _id, title, description, category, price },
}) => {
  return (
    <Fragment>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={image} alt={title} className="card-img-top" />
          <div className="card-body">
            <h5>{category}</h5>
            <h4 className="card-title">
              <strong>{title}</strong>
            </h4>

            <h5>₹ {price}</h5>

            <p className="card-text">{description}</p>
          </div>
          <div className="float-right">
            <Link to={`/product/${_id}`} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
