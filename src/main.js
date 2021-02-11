import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue, IconsPlugin)

// Axios
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      api: 'https://restcountries.eu/rest/v2/'
    }
  },
  render: h => h(App)
}).$mount('#app')
