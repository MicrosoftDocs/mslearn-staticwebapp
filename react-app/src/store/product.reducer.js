import {
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  LOAD_PRODUCT_ERROR,
} from './product.actions';

let initState = {
  loading: false,
  data: [],
  error: void 0,
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...state, loading: true, error: '' };
    case LOAD_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
