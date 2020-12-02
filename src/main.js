import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.css'
import './plugins/element.js'
import store from './store/index'
import './mock/mockServer'

//图标字体 引入到main.js里面，所有组件都可以使用
import "./styles/icon-font/iconfont.css"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
