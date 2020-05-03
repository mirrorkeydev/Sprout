import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: ["bedroom"],
    connected: true,
    family: [
      {
        given_name: "Ophelia",
        common_name: "Chinese Evergreen",
        uncommon_name: "Aglaonema Silver Bay",
        botanical_name: "Aglaonema Commutatum",
        variegated: false,
        icon: "plant1_green"
      },
      {
        given_name: "Elinor",
        common_name: "Baby Rubber Plant",
        botanical_name: "Peperomia Obtusifolia",
        variegated: true,
        icon: "plant2_green"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    NUM_ROOMS: state => {
      return state.rooms.length;
    }
  },
})
