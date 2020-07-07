import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProducts } from "../../actions/product";

const Search = ({ searchProducts }) => {
  const [formData, setFormData] = useState({
    text: "",
  });
  const { text } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    searchProducts(text);
  };

  return (
    <Fragment>
      <h3>Search</h3>
      <form className="form-group mt-1">
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => onChange(e)}
          className="form control"
          placeholder="Search for products"
        />
      </form>
    </Fragment>
  );
};

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};

export default connect(null, { searchProducts })(Search);
