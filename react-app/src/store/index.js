import { combineReducers } from 'redux';
import { selectedVacationReducer, vacationsReducer } from './vacation.reducer';

export * from './vacation.actions';
export * from './vacation.reducer';
export * from './vacation.saga';

const store = combineReducers({
  vacations: vacationsReducer,
  selectedVacation: selectedVacationReducer,
});

export default store;
