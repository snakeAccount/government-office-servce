import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPath: '',
  },
  getters: {
    getCurrentPath(state) {
      return state.currentPath;
    }
  },
  mutations: {
    eidtCurrentPath(state, pathStr) {
      state.currentPath = pathStr;
    }
  },
  actions: {
    eidtCurrentPath(context, pathStr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('eidtCurrentPath', pathStr);
          resolve();
        })
      })
    }
  },
  modules: {}
})