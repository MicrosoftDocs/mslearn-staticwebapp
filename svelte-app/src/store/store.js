import { writable } from 'svelte/store';

const state = {
  vacations: writable([]),
};

const getVacations = (vacations) => {
  state.vacations.update((old) => vacations);
};

const addVacation = (vacation) => {
  state.vacations.update((old) => {
    old.unshift(vacation);
    return old;
  });
};

const deleteVacation = (vacation) => {
  state.vacations.update((old) => [...old.filter((v) => v.id !== vacation.id)]);
};

const updateVacation = (vacation) => {
  state.vacations.update((old) => {
    const index = old.findIndex((v) => v.id === vacation.id);
    old.splice(index, 1, vacation);
    return [...old];
  });
};

export { state, addVacation, getVacations, updateVacation, deleteVacation };
