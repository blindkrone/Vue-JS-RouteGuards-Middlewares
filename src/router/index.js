import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Auth/login'
import Henlo from '../views/henlo'

Vue.use(VueRouter)

const routes = [
  {path: '/',       name: 'home',   component: Home},
  {path: '/about',  name: 'about',  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path: '/henlo',  name: 'henlo',  component: Henlo}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//global before router function
router.beforeEach((to, from, next) => {  
  var auth = localStorage.getItem("BEEPTS-UserToken")
  if (auth !== null && to.path === '/') {
    next(from)
  }else if(auth === null && 
        (
          to.path === '/about' ||
          to.path === '/henlo'
        )
    ){
    next(from)
  }
  else {
    next()
  }
})  

export default router
