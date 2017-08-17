import Vue from 'vue'
import Router from 'vue-router'
import Carousel from '@/components/carousel'
import Home from '@/components/home'
import Form from '@/components/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ],
  mode: 'history'
})
