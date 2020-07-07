import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCT,
  FILTER_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "../actions/types";

const initialState = {
  products: [],
  singleProduct: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        loading: false,
      };
    case LOAD_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
        loading: false,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.category === payload
        ),
        loading: false,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((product) =>
          product.title.toLowerCase().match(payload)
        ),
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products:
          payload === "high"
            ? state.products.sort((a, b) => b.price - a.price)
            : state.products.sort((a, b) => a.price - b.price),

        loading: false,
      };

    case LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        products: [],
        singleProduct: null,
        loading: false,
      };
    default:
      return state;
  }
}
