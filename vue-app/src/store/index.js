import Vue from 'vue';
import Vuex from 'vuex';
import vacationsModule from './modules/vacations';

export * from './modules/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    vacations: vacationsModule,
  },
  state: {},
});
