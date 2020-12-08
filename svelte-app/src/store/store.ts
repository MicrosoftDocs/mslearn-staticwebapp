import { Writable, writable } from 'svelte/store';
import { Product } from '../models';

export interface ShopAtHomeState {
  products: Writable<Product[]>;
}

const state: ShopAtHomeState = {
  products: writable([]),
};

const getProducts = (products: Product[]) => {
  state.products.update((old: Product[]) => products);
};

export { state, getProducts };
