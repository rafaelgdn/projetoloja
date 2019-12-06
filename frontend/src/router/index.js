import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CadastroOS from '../views/CadastroOS.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pesquisar',
    nome: 'pesquisar',
    component: Home
  },
  {
    path: '/cadastro',
    nome: 'cadastroOS',
    component: CadastroOS
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
