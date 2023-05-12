import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: 'personal',
                component: Personal
            }
        ]

    }
]

const router = new VueRouter ({
    routes
})

export default router