import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue"
import SignUpView from "@/views/SignUpView.vue"

const routes = [
   {
      path: '/',
      name: 'MainView',
      component: MainView
   },
   {
      path: '/sign-up',
      name: 'SignUpView',
      component: SignUpView
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router