import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { sortProducts } from "../../actions/product";
import { connect } from "react-redux";

const Sort = ({ sortProducts }) => {
  const [sort, setSort] = useState([
    {
      label: "Sort by price",
      value: "",
    },
    {
      label: "Low to High",
      value: "low",
    },
    {
      label: "High to Low",
      value: "high",
    },
  ]);
  const onChange = (e) => {
    sortProducts(e.target.value);
  };
  return (
    <Fragment>
      <h3>Sort</h3>
      <select onChange={(e) => onChange(e)}>
        {sort.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

Sort.propTypes = {
  sortProducts: PropTypes.func.isRequired,
};

export default connect(null, { sortProducts })(Sort);
