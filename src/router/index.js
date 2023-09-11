import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: ':opcion',
        name: 'mostrarcuerpo',
        props:route=>({...route.params}),
        component: () => import( '@/views/CuerpoPrincipal.vue')
      }

    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:"resaltar",
})

export default router
