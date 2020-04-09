import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteVacationApi = async (vacation) => {
  const response = await axios.delete(`${API}/vacations/${vacation.id}`);
  return parseItem(response, 200);
};

export const updateVacationApi = async (vacation) => {
  captains.log(vacation.id);
  const response = await axios.put(`${API}/vacations/${vacation.id}`, vacation);
  return parseItem(response, 200);
};

export const addVacationApi = async (vacation) => {
  const response = await axios.post(`${API}/vacations`, vacation);
  return parseItem(response, 201);
};

export const loadVacationsApi = async () => {
  const response = await axios.get(`${API}/vacations`);
  return parseList(response, 200);
};
