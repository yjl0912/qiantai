import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.css'
import './plugins/element.js'
import store from './store/index'



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
