import { Product } from '../models';
import * as store from './store';

export interface AppData {
  products: Product[];
}

const data: AppData = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: 1,
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
  ],
};

export async function getProductsAction() {
  store.getProducts(data.products);
  return data.products;
}
