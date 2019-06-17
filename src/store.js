import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      { name: 'Nathaniel Gustafson', email: 'nat@natgus.com', type: 'friend'},
      { name: 'Eddie', email: 'eddie@eddie.com', type: 'enemy'},
      { name: 'Jason Halladay', email: 'jason@gmail.com', type: 'family'},
      { name: 'Jillian Smith', email: 'jilly@gmail.com', type: 'coworker'}
    ],
    singleContact: []
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact)
    },
    DELETE_CONTACT(state, id) {
      state.contacts.splice(id, 1)
    }
  },
  getters: {
    getContactTypes: state => {
      return state.contacts.map(value => value.type)
    },
    getContacts: state => {
      return state.contacts
    }
  },
  actions: {
    addContact({ commit }, contact) {
      commit('ADD_CONTACT', contact)
    },
    deleteContact({ commit }, id) {
      commit('DELETE_CONTACT', id)
    },
    // setSingleContact({ commit }, id) {

    // }
  }
})
