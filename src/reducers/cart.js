import { ADD_TO_CART, REMOVE_FROM_CART, CART_ERROR } from "../actions/types";

const initialState = {
  cart: [],
  total: 0,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [payload, ...state.cart],
        total: state.total + payload.price,
        loading: false,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload._id),
        total: state.total - payload.price,
        loading: false,
      };
    case CART_ERROR:
      return {
        ...state,
        cart: [],
        total: 0,
        loading: false,
      };
    default:
      return state;
  }
}
