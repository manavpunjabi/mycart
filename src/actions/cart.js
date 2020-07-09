import { ADD_TO_CART, REMOVE_FROM_CART, CART_ERROR, CLEAR_CART } from "./types";
import { setAlert } from "./alert";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
    dispatch(setAlert("Product added to cart", "success"));
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  }
};
export const removeFromCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
    dispatch(setAlert("Product removed from cart", "success"));
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CART,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  }
};
