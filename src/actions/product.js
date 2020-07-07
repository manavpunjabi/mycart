import {
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
  LOAD_PRODUCT,
  LOAD_PRODUCTS_ERROR,
  SORT_PRODUCTS,
  SEARCH_PRODUCTS,
} from "./types";
import db from "../db.json";

export const loadProducts = () => async (dispatch) => {
  try {
    const data = db;
    dispatch({
      type: LOAD_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const loadProduct = (id) => async (dispatch) => {
  try {
    const data = db.products[id];
    dispatch({
      type: LOAD_PRODUCT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const filterProducts = (category) => async (dispatch) => {
  try {
    const data = db;
    dispatch({
      type: LOAD_PRODUCTS,
      payload: data,
    });
    dispatch({
      type: FILTER_PRODUCTS,
      payload: category,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const sortProducts = (type) => async (dispatch) => {
  try {
    const data = db;
    dispatch({
      type: LOAD_PRODUCTS,
      payload: data,
    });
    dispatch({
      type: SORT_PRODUCTS,
      payload: type,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const searchProducts = (search) => async (dispatch) => {
  try {
    const data = db;
    dispatch({
      type: LOAD_PRODUCTS,
      payload: data,
    });
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: search,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};
