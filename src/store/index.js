import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const API_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/dev/plantdata' : 'https://ktajuvbaof.execute-api.us-west-2.amazonaws.com/prod/plantdata';

export default new Vuex.Store({
  state: {
    connection_status: "connecting_failed",
    family: [
      {
        given_name: "ophelia", // doubles as unique ID
        common_name: "Chinese Evergreen",
        uncommon_name: "Aglaonema Silver Bay",
        botanical_name: "Aglaonema Commutatum",
        variegated: false,
        color: "#9E96FB",
        icon: "plant1",
        green_threshold: 260,
        yellow_threshold: 230,
      },
      {
        given_name: "elinor",
        common_name: "Baby Rubber Plant",
        botanical_name: "Peperomia Obtusifolia",
        variegated: true,
        color: "#88DEE3",
        icon: "plant2",
        green_threshold: 250,
        yellow_threshold: 205,
      }
    ],
    chart_data: {
      soil_moisture: {
        ophelia: null,
        elinor: null,
      },
      temperature: null,
      pressure: null,
      light: null
    }
  },
  mutations: {
    SET_CONNECTION_STATUS(state, status) {
      state.connection_status = status;
    },
    SET_DATA(state, data) {
      state.chart_data = data;
    },

  },
  actions: {
    async fetchData(context) {
      // If we've made a successful connection in the past, we don't need to
      // let the user know that we're pinging the connection again
      if (context.state.connection_status != 'connected') {
        context.commit('SET_CONNECTION_STATUS', 'connecting')
      }
      
      // Grab our data from the api
      try {
        const plant_data = await (await fetch(API_URL)).json();

        const data = {};
        data.soil_moisture = {};
        data.soil_moisture.ophelia = plant_data.message[0].datetime.map((x, i) => [new Date(x), plant_data.message[0].ophelia[i]]);
        data.soil_moisture.elinor = plant_data.message[0].datetime.map((x, i) => [new Date(x), plant_data.message[0].elinor[i]]);
        data.temperature = plant_data.message[0].datetime.map((x, i) => [new Date(x), plant_data.message[0].temp[i]]);
        data.pressure = plant_data.message[0].datetime.map((x, i) => [new Date(x), plant_data.message[0].pressure[i]]);
        data.light = plant_data.message[0].datetime.map((x, i) => [new Date(x), plant_data.message[0].light[i]]);
        
        const dates_measured = plant_data.message[0].datetime;
        context.commit('SET_DATA', data);

        // Check if data was sent in the last 10 minutes - if not, show a failing connection.
        if (Date.now() - new Date(dates_measured[dates_measured.length - 1]).getTime() > 15 * 60 * 1000) {
          context.commit('SET_CONNECTION_STATUS', 'connecting_failed')
        } else {
          context.commit('SET_CONNECTION_STATUS', 'connected');
        }
      } catch (e) {
        context.commit('SET_CONNECTION_STATUS', 'connecting_failed')
        console.warn(e);
      }
    }
  },
})
