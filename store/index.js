import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    key1: 1
  },
  getters: {
    key1Getter: state => `hello: ${state.key1}`
  },
  mutations: {
    setKey1(state, payload) {
      state.key1 = payload;
    },
    addKey1(state, payload) {
      state.key1 += 1;
    }
  }
});

export default store;
