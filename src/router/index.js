import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';


//import User from '../components/User.vue'

//const Home = r => r(require('../views/Home'),Home)
//const about = r => r(require('../views/About'),about)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    childern:{
      path: '/about/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "about" */ '../components/User.vue')
    }
    
  },
  {
    path: '/about/user',
    name: 'User',
    component:  () => import(/* webpackChunkName: "about" */ '../components/User.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
