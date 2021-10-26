import Vue from 'vue';
import Vuex from 'vuex';
import System from './modules/system';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: User,
    system: System,
  },
});
