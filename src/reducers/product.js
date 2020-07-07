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
    case SORT_PRODUCTS:
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: payload,
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
