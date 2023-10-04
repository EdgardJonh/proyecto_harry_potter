import Vue from 'vue'
import Vuex from 'vuex'
import hechizos from './hechizos'
import personajes from './personajes'
import libros from './libros'
//Almacen Principal
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    hechizos,
    personajes,
    libros
  }
})
