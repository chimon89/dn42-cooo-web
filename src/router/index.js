import { createRouter, createWebHistory } from 'vue-router'
import Main from "../views/Main.vue"
import Home from "../views/Pages/Home.vue"
import NodeInfo from "../views/Nodes/NodeInfo.vue";

const routes = [
  { path: '/',
    component: Main,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/nodes', component: NodeInfo }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
