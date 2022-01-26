import m from 'moment'
import _ from 'lodash'
import { v4 as uuid } from 'uuid'

export const state = () => ({
  uuid: uuid(),
  user: null,
})

export const getters = {
  user: (state) => state.user,
}

export const mutations = {
  saveUser: (state, user) => {
    state.user = user
  },
}

export const actions = {
  user({ commit }, user) {
    commit('saveUser', user)
  }
}
