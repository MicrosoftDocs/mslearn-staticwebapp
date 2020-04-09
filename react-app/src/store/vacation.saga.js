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
} from './vacation.actions';
import {
  addVacationApi,
  deleteVacationApi,
  loadVacationsApi,
  updateVacationApi,
} from './vacation.api';

export function* loadingVacationsAsync() {
  try {
    const data = yield call(loadVacationsApi);
    const vacationes = [...data];

    yield put({ type: LOAD_VILLAIN_SUCCESS, payload: vacationes });
  } catch (err) {
    yield put({ type: LOAD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchLoadingVacationsAsync() {
  yield takeEvery(LOAD_VILLAIN, loadingVacationsAsync);
}

export function* updatingVacationAsync({ payload }) {
  try {
    const data = yield call(updateVacationApi, payload);
    const updatedVacation = data;

    yield put({ type: UPDATE_VILLAIN_SUCCESS, payload: updatedVacation });
  } catch (err) {
    yield put({ type: UPDATE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchUpdatingVacationAsync() {
  yield takeEvery(UPDATE_VILLAIN, updatingVacationAsync);
}

export function* deletingVacationAsync({ payload }) {
  try {
    yield call(deleteVacationApi, payload);

    yield put({ type: DELETE_VILLAIN_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchDeletingVacationAsync() {
  yield takeEvery(DELETE_VILLAIN, deletingVacationAsync);
}

export function* addingVacationAsync({ payload }) {
  try {
    const data = yield call(addVacationApi, payload);
    const addedVacation = data;

    yield put({ type: ADD_VILLAIN_SUCCESS, payload: addedVacation });
  } catch (err) {
    yield put({ type: ADD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchAddingVacationAsync() {
  yield takeEvery(ADD_VILLAIN, addingVacationAsync);
}

export function* vacationSaga() {
  yield all([
    watchLoadingVacationsAsync(),
    watchUpdatingVacationAsync(),
    watchDeletingVacationAsync(),
    watchAddingVacationAsync(),
  ]);
}
