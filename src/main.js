import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import "./assets/style.sass";
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  components: { App }
}).$mount('#app')