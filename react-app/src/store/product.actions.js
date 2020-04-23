export const LOAD_VILLAIN = '[Products] LOAD_VILLAIN';
export const LOAD_VILLAIN_SUCCESS = '[Products] LOAD_VILLAIN_SUCCESS';
export const LOAD_VILLAIN_ERROR = '[Products] LOAD_VILLAIN_ERROR';

export const UPDATE_VILLAIN = '[Products] UPDATE_VILLAIN';
export const UPDATE_VILLAIN_SUCCESS = '[Products] UPDATE_VILLAIN_SUCCESS';
export const UPDATE_VILLAIN_ERROR = '[Products] UPDATE_VILLAIN_ERROR';

export const DELETE_VILLAIN = '[Products] DELETE_VILLAIN';
export const DELETE_VILLAIN_SUCCESS = '[Products] DELETE_VILLAIN_SUCCESS';
export const DELETE_VILLAIN_ERROR = '[Products] DELETE_VILLAIN_ERROR';

export const ADD_VILLAIN = '[Products] ADD_VILLAIN';
export const ADD_VILLAIN_SUCCESS = '[Products] ADD_VILLAIN_SUCCESS';
export const ADD_VILLAIN_ERROR = '[Products] ADD_VILLAIN_ERROR';

export const SELECT_VILLAIN = '[Product] SELECT_VILLAIN';

export const selectProductAction = (product) => ({
  type: SELECT_VILLAIN,
  payload: product,
});
export const loadProductsAction = () => ({ type: LOAD_VILLAIN });

export const updateProductAction = (product) => ({
  type: UPDATE_VILLAIN,
  payload: product,
});
export const deleteProductAction = (product) => ({
  type: DELETE_VILLAIN,
  payload: product,
});
export const addProductAction = (product) => ({
  type: ADD_VILLAIN,
  payload: product,
});
