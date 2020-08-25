import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './product.actions';
import { loadProductsApi } from './product.api';

export function* loadingProductsAsync() {
  try {
    const data = yield call(loadProductsApi);
    const productes = [...data];

    yield put({ type: LOAD_PRODUCT_SUCCESS, payload: productes });
  } catch (err) {
    yield put({ type: LOAD_PRODUCT_ERROR, payload: err.message });
  }
}

export function* watchLoadingProductsAsync() {
  yield takeEvery(LOAD_PRODUCT, loadingProductsAsync);
}

export function* productSaga() {
  yield all([watchLoadingProductsAsync()]);
}
