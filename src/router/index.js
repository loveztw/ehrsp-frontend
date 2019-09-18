import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import ShowText from '@/constants/ShowTextConst'

Vue.use(Router)

Vue.prototype.ShowText = ShowText

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
