import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ReteEditor from './views/ReteEditor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: ReteEditor
    }
  ]
})