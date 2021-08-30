import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    key1: 1,
    isLogin: false,
    hasLogin: false,
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
    login(state, isLogin) {
      state.isLogin = isLogin;
      state.hasLogin = isLogin;
    }
  }
});

export default store;
