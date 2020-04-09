import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addVacationAction,
  deleteVacationAction,
  loadVacationsAction,
  selectVacationAction,
  updateVacationAction,
} from '../store';

/** Custom hook for accessing Vacation state in redux store */
function useVacations() {
  const dispatch = useDispatch();

  return {
    // Selectors
    vacations: useSelector((state) => state.vacations.data),
    selectedVacation: useSelector((state) => state.selectedVacation),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    addVacation: (vacation) => dispatch(addVacationAction(vacation)),
    deleteVacation: (vacation) => dispatch(deleteVacationAction(vacation)),
    getVacations: useCallback(() => dispatch(loadVacationsAction()), [
      dispatch,
    ]), // called within a useEffect()
    selectVacation: (vacation) => dispatch(selectVacationAction(vacation)),
    updateVacation: (vacation) => dispatch(updateVacationAction(vacation)),
  };
}

export default useVacations;
