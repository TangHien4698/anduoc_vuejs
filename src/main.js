import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Router from 'vue-router'

import StoreInit from './store'
import RouterInit from "./router"
import VueAxios from './plugins/axios'
import jquery from "jquery";
window.$ = jquery;
window.jQuery = jquery;

Vue.use(VueAxios);
Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store(StoreInit);
const router = new Router(RouterInit);
// window.axios = require('axios');
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
