import { writable } from 'svelte/store';

const state = {
  products: writable([]),
};

const getProducts = (products) => {
  state.products.update((old) => products);
};

export { state, getProducts };
