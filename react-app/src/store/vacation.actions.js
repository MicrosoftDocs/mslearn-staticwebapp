export const LOAD_VILLAIN = '[Vacations] LOAD_VILLAIN';
export const LOAD_VILLAIN_SUCCESS = '[Vacations] LOAD_VILLAIN_SUCCESS';
export const LOAD_VILLAIN_ERROR = '[Vacations] LOAD_VILLAIN_ERROR';

export const UPDATE_VILLAIN = '[Vacations] UPDATE_VILLAIN';
export const UPDATE_VILLAIN_SUCCESS = '[Vacations] UPDATE_VILLAIN_SUCCESS';
export const UPDATE_VILLAIN_ERROR = '[Vacations] UPDATE_VILLAIN_ERROR';

export const DELETE_VILLAIN = '[Vacations] DELETE_VILLAIN';
export const DELETE_VILLAIN_SUCCESS = '[Vacations] DELETE_VILLAIN_SUCCESS';
export const DELETE_VILLAIN_ERROR = '[Vacations] DELETE_VILLAIN_ERROR';

export const ADD_VILLAIN = '[Vacations] ADD_VILLAIN';
export const ADD_VILLAIN_SUCCESS = '[Vacations] ADD_VILLAIN_SUCCESS';
export const ADD_VILLAIN_ERROR = '[Vacations] ADD_VILLAIN_ERROR';

export const SELECT_VILLAIN = '[Vacation] SELECT_VILLAIN';

export const selectVacationAction = (vacation) => ({
  type: SELECT_VILLAIN,
  payload: vacation,
});
export const loadVacationsAction = () => ({ type: LOAD_VILLAIN });

export const updateVacationAction = (vacation) => ({
  type: UPDATE_VILLAIN,
  payload: vacation,
});
export const deleteVacationAction = (vacation) => ({
  type: DELETE_VILLAIN,
  payload: vacation,
});
export const addVacationAction = (vacation) => ({
  type: ADD_VILLAIN,
  payload: vacation,
});
