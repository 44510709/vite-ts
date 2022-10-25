import { createRouter, createWebHashHistory } from "vue-router";
import home from "../view/Home.vue";
const routes: any = [
  {
    path: '/',
    component: home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router