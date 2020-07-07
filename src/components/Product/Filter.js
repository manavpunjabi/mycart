import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { filterProducts } from "../../actions/product";
import { connect } from "react-redux";

const Filter = ({ filterProducts }) => {
  const [filter, setFilter] = useState({
    computers: "computers",
    clothes: "clothes",
    mobiles: "mobiles",
  });
  const { computers, clothes, mobiles } = filter;
  const onChange = (e) => filterProducts(e.target.value);
  return (
    <Fragment>
      <h3>Filter</h3>
      <form className="form-group">
        <input
          type="radio"
          name="filter"
          value={computers}
          onChange={(e) => onChange(e)}
        />{" "}
        <label htmlFor="computers">Computers </label>
        <br />
        <input
          type="radio"
          name="filter"
          value={clothes}
          onChange={(e) => onChange(e)}
        />{" "}
        <label htmlFor="computers">Clothes </label>
        <br />
        <input
          type="radio"
          name="filter"
          value={mobiles}
          onChange={(e) => onChange(e)}
        />{" "}
        <label htmlFor="computers">Mobiles </label>
      </form>
    </Fragment>
  );
};

Filter.propTypes = {
  filterProducts: PropTypes.func.isRequired,
};

export default connect(null, { filterProducts })(Filter);
