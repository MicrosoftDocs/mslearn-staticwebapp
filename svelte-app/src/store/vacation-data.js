import * as store from './store';
import { parseItem, parseList } from './http-utils';
import API from './config';

export async function getVacationsAction() {
  try {
    const response = await fetch(`${API}/vacations`, {
      method: 'GET',
    });
    const vacations = await parseList(response);
    store.getVacations(vacations);
    return vacations;
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteVacationAction(vacation) {
  try {
    const response = await fetch(`${API}/vacations/${vacation.id}`, {
      method: 'DELETE',
    });
    await parseItem(response, 200);
    store.deleteVacation(vacation);
    return null;
  } catch (error) {
    console.error(error);
  }
}
export async function updateVacationAction(vacation) {
  try {
    const response = await fetch(`${API}/vacations/${vacation.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vacation),
    });
    const updatedVacation = await parseItem(response, 200);
    store.updateVacation(updatedVacation);
    return updatedVacation;
  } catch (error) {
    console.error(error);
  }
}
export async function addVacationAction(vacation) {
  try {
    const response = await fetch(`${API}/vacations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vacation),
    });
    const addedVacation = await parseItem(response, 201);
    store.addVacation(addedVacation);
    return addedVacation;
  } catch (error) {
    console.error(error);
  }
}
