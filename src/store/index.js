import { createStore } from 'vuex'
import { data } from '../data'
export default createStore({
  state: {
    TogglePopup: false,
    navToggle: false,
    certToggle: false,
    cretData: null,
    workData: data.work,
    skillData: data.skill,
    skillsTarget: {
      name: 'frontEnd',
      data: data.skill.frontEnd
    }
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
    },
    SKILL_DATA({ state }, payload) {
      if (payload === 'frontEnd') {
        state.skillsTarget.name = 'frontEnd'
        state.skillsTarget.data = state.skillData.frontEnd
      }
      if (payload === 'design') {
        state.skillsTarget.name = 'design'
        state.skillsTarget.data = state.skillData.design
      }
      if (payload === 'tool') {
        state.skillsTarget.name = 'tool'
        state.skillsTarget.data = state.skillData.tool
      }
    }
  }
})
