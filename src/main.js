import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import "./assets/style.css";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#app')