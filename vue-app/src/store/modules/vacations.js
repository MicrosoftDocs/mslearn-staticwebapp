import axios from 'axios';
import API from '../config';
import { parseItem, parseList } from './action-utils';
import {
  ADD_VACATION,
  DELETE_VACATION,
  GET_VACATIONS,
  UPDATE_VACATION,
} from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    vacations: [],
  },
  mutations: {
    [ADD_VACATION](state, vacation) {
      state.vacations.unshift(vacation);
    },
    [UPDATE_VACATION](state, vacation) {
      const index = state.vacations.findIndex(v => v.id === vacation.id);
      state.vacations.splice(index, 1, vacation);
      state.vacations = [...state.vacations];
    },
    [GET_VACATIONS](state, vacations) {
      state.vacations = vacations;
    },
    [DELETE_VACATION](state, vacation) {
      state.vacations = [...state.vacations.filter(p => p.id !== vacation.id)];
    },
  },
  actions: {
    // actions let us get to ({ state, getters, commit, dispatch }) {
    async getVacationsAction({ commit }) {
      try {
        const response = await axios.get(`${API}/vacations`);
        const vacations = parseList(response);
        commit(GET_VACATIONS, vacations);
        return vacations;
      } catch (error) {
        captains.error(error);
      }
    },
    async deleteVacationAction({ commit }, vacation) {
      try {
        const response = await axios.delete(`${API}/vacations/${vacation.id}`);
        parseItem(response, 200);
        commit(DELETE_VACATION, vacation);
        return null;
      } catch (error) {
        captains.error(error);
      }
    },
    async updateVacationAction({ commit }, vacation) {
      try {
        const response = await axios.put(
          `${API}/vacations/${vacation.id}`,
          vacation
        );
        const updatedvacation = parseItem(response, 200);
        commit(UPDATE_VACATION, updatedvacation);
        return updatedvacation;
      } catch (error) {
        captains.error(error);
      }
    },
    async addVacationAction({ commit }, vacation) {
      try {
        const response = await axios.post(`${API}/vacations`, vacation);
        const addedVacation = parseItem(response, 201);
        commit(ADD_VACATION, addedVacation);
        return addedVacation;
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    vacations: state => state.vacations,
  },
};
