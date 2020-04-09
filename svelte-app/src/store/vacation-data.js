import axios from 'axios';
import * as store from './store';
import { parseItem, parseList } from './http-utils';
import API from './config';

export async function getVacationsAction() {
  try {
    const response = await axios.get(`${API}/vacations`);
    const vacations = parseList(response);
    store.getVacations(vacations);
    return vacations;
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteVacationAction(vacation) {
  try {
    const response = await axios.delete(`${API}/vacations/${vacation.id}`);
    parseItem(response, 200);
    store.deleteVacation(vacation);
    return null;
  } catch (error) {
    console.error(error);
  }
}
export async function updateVacationAction(vacation) {
  try {
    const response = await axios.put(
      `${API}/vacations/${vacation.id}`,
      vacation
    );
    const updatedVacation = parseItem(response, 200);
    store.updateVacation(updatedVacation);
    return updatedVacation;
  } catch (error) {
    console.error(error);
  }
}
export async function addVacationAction(vacation) {
  try {
    const response = await axios.post(`${API}/vacations`, vacation);
    const addedVacation = parseItem(response, 201);
    store.addVacation(addedVacation);
    return addedVacation;
  } catch (error) {
    console.error(error);
  }
}
