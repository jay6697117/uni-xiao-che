import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    key1: 1,
    isLogin: false
  },
  getters: {
    key1Getter: state => `hello: ${state.key1}`
  },
  mutations: {
    setKey1(state, val) {
      state.key1 = val;
    },
    addKey1(state) {
      state.key1 += 1;
    },
    setLogin(state, bool) {
      console.log(`setLogin bool:`, bool)
      state.isLogin = bool;
    }
  },
  actions: {
    setLoginAsync({ commit }, bool) {
      console.log(`setLoginAsync bool:`, bool);
      commit('setLogin', bool);
    }
  }
});

export default store;
