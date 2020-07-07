import React from "react";
import PropTypes from "prop-types";
import { removeFromCart } from "../../actions/cart";
import { connect } from "react-redux";
const CartItem = ({ item, removeFromCart }) => {
  return (
    <tr>
      <th scope="row">{item._id} </th>
      <td>
        <img
          src={item.image}
          alt=""
          height="200px"
          width="100px"
          className="img-fluid"
        />
      </td>
      <td>{item.title} </td>
      <td>{item.category} </td>
      <td>₹ {item.price}</td>
      <td>
        <button onClick={(e) => removeFromCart(item)}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default connect(null, { removeFromCart })(CartItem);
