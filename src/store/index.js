import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: ["bedroom"],
    connection_status: "connecting_failed",
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
    ],
    data: null
  },
  mutations: {
    SET_CONNECTION_STATUS(state, status) {
      state.connection_status = status
    },
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    fetchData(context) {

      // If we've made a successful connection in the past, we don't need to
      // let the user know that we're pinging the connection again
      if (context.state.connection_status != 'connected') {
        context.commit('SET_CONNECTION_STATUS', 'connecting')
      }
      
      // Grab our data from the api
      Axios.get('http://slowwly.robertomurray.co.uk/delay/3300/url/https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        context.commit('SET_CONNECTION_STATUS', 'connected')
        context.commit('SET_DATA', response.data)
      })
      .catch(error => {
        context.commit('SET_CONNECTION_STATUS', 'connecting_failed')
        console.log(error)
      })
    }
  },
  modules: {
  },
  getters: {
    NUM_ROOMS: state => {
      return state.rooms.length;
    }
  },
})
