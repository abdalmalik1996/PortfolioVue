import { createStore } from 'vuex'
import { data } from '../data'
export default createStore({
  state: {
    TogglePopup: false,

    navToggle: false,
    certToggle: false,
    cretData: null,
    workData: data.work
  },
  mutations: {
    TOGGLE_POPUP(state) {
      state.TogglePopup = !state.TogglePopup
    },

    CERT_TOGGLE(state) {
      state.certToggle = !state.certToggle
    },
    NAV_TOGGLE(state) {
      state.navToggle = !state.navToggle
    }
  },
  actions: {
    CRET_DATA({ commit, state }, payload) {
      if (payload === 'js') {
        state.cretData = data.certificate[payload]
        commit('CERT_TOGGLE')
      }
      if (payload === 'design') {
        state.cretData = data.certificate[payload]
        commit('CERT_TOGGLE')
      }
    }
  }
})
