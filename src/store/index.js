import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    capacity: {
      design: 4,
      code: 3,
      qa: 4
    }
  },
  mutations: {
    newCapacity: (state, payload) => { state.capacity[payload.stage] = payload.capacity }
  },
  getters: {
    designCapacity: state => state.capacity.design,
    codeCapacity: state => state.capacity.code,
    qaCapacity: state => state.capacity.qa
  }
})
