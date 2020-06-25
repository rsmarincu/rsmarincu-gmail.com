import Vue from 'vue'
import App from './App.vue'
import "./assets/style.sass";
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  vuetify,
  components: { App }
}).$mount('#app')