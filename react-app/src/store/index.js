import { combineReducers } from 'redux';
import { productsReducer } from './product.reducer';

export * from './product.actions';
export * from './product.reducer';
export * from './product.saga';

const store = combineReducers({
  products: productsReducer,
});

export default store;
