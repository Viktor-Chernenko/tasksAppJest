import Vue from "vue";
import Vuex from "vuex";

import { state, actions, mutations, getters } from "@/store/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...state,
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },
  getters: {
    ...getters,
  },
});
