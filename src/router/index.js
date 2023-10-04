import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hechizos from '@/views/Hechizos.vue';
import Personajes from '@/views/PersonajesView.vue'
import saberMas from '@/views/SaberMas.vue'
import Libros from '@/views/LibrosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hechizos',
    name: 'hechizos',
    component: Hechizos
  },
  //Agregamos la ruta de personajes
  {
    path: '/personajes',
    name: 'personajes',
    component: Personajes
  },
  {
    path: '/libros',
    name: 'libros',
    component: Libros
  },
  // //Ruta dinamica
  {
    path:'/saberMas/:param1/:param2/:param3',
    name:'saberMas',
    component: saberMas,
    props: route => ({
      param1: route.params.param1,
      param2: route.params.param2,
      param3: route.params.param3
    })
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
