import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
// import $ from "jquery";

Vue.use(Toasted)
// Vue.use($)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
