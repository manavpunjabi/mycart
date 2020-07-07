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

export const filterProducts = (categories) => async (dispatch) => {
  try {
    const data = db.products.filter(
      (product) => product.category === categories
    );
    // const data = db.filter((product) => {
    //   Object.keys(categories).every((p) => {
    //     return categories[p].some((z) => z == product[p]);
    //   });
    // });
    dispatch({
      type: FILTER_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const sortProducts = (type) => async (dispatch) => {
  try {
    let data;
    switch (type) {
      case "low":
        data = db.products.sort((a, b) => a.price - b.price);
        break;
      case "high":
        data = db.products.sort((a, b) => b.price - a.price);

        break;
      default:
        data = data;
    }
    dispatch({
      type: SORT_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};

export const searchProducts = (search) => async (dispatch) => {
  try {
    const data = db.products.filter((product) =>
      product.title.toLowerCase().match(search)
    );
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_PRODUCTS_ERROR,
    });
  }
};
