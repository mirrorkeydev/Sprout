import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'
import ECharts from 'vue-echarts'

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    tablet: 1100,
    desktop: Infinity,
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
