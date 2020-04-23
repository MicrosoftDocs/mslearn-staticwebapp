import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_VILLAIN,
  LOAD_VILLAIN_SUCCESS,
  LOAD_VILLAIN_ERROR,
  UPDATE_VILLAIN,
  UPDATE_VILLAIN_SUCCESS,
  UPDATE_VILLAIN_ERROR,
  DELETE_VILLAIN,
  DELETE_VILLAIN_SUCCESS,
  DELETE_VILLAIN_ERROR,
  ADD_VILLAIN,
  ADD_VILLAIN_SUCCESS,
  ADD_VILLAIN_ERROR,
} from './product.actions';
import {
  addProductApi,
  deleteProductApi,
  loadProductsApi,
  updateProductApi,
} from './product.api';

export function* loadingProductsAsync() {
  try {
    const data = yield call(loadProductsApi);
    const productes = [...data];

    yield put({ type: LOAD_VILLAIN_SUCCESS, payload: productes });
  } catch (err) {
    yield put({ type: LOAD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchLoadingProductsAsync() {
  yield takeEvery(LOAD_VILLAIN, loadingProductsAsync);
}

export function* updatingProductAsync({ payload }) {
  try {
    const data = yield call(updateProductApi, payload);
    const updatedProduct = data;

    yield put({ type: UPDATE_VILLAIN_SUCCESS, payload: updatedProduct });
  } catch (err) {
    yield put({ type: UPDATE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchUpdatingProductAsync() {
  yield takeEvery(UPDATE_VILLAIN, updatingProductAsync);
}

export function* deletingProductAsync({ payload }) {
  try {
    yield call(deleteProductApi, payload);

    yield put({ type: DELETE_VILLAIN_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchDeletingProductAsync() {
  yield takeEvery(DELETE_VILLAIN, deletingProductAsync);
}

export function* addingProductAsync({ payload }) {
  try {
    const data = yield call(addProductApi, payload);
    const addedProduct = data;

    yield put({ type: ADD_VILLAIN_SUCCESS, payload: addedProduct });
  } catch (err) {
    yield put({ type: ADD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchAddingProductAsync() {
  yield takeEvery(ADD_VILLAIN, addingProductAsync);
}

export function* productSaga() {
  yield all([
    watchLoadingProductsAsync(),
    watchUpdatingProductAsync(),
    watchDeletingProductAsync(),
    watchAddingProductAsync(),
  ]);
}
