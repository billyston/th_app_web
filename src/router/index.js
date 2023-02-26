import { createRouter, createWebHistory } from 'vue-router'

const routes =
[
    { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')},
    { path: '/pr/v1/:project', name: 'project', component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
