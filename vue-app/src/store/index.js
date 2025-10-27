import { createStore } from 'vuex'
import productsModule from './modules/products'

export * from './modules/mutation-types'

export default createStore({
  strict: import.meta.env.DEV,
  modules: {
    products: productsModule
  },
  state: {}
})
