import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProductsAction } from '../store';

/** Custom hook for accessing Product state in redux store */
function useProducts() {
  const dispatch = useDispatch();

  return {
    // Selectors
    products: useSelector((state) => state.products.data),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    getProducts: useCallback(() => dispatch(loadProductsAction()), [dispatch]), // called within a useEffect()
  };
}

export default useProducts;
