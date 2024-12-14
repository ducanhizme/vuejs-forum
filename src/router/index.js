import {createRouter,createWebHistory} from "vue-router";

const routes=[
    {
        path:'/register',
        name:'Register',
        component:()=>import('@/views/pages/auth/RegisterView.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('@/views/pages/auth/LoginView.vue')
    },
    {
        path:'/',
        component:()=>import('@/views/layout/AppLayout.vue'),
        children:[
            {
                path:'',
                name:'home',
                component:()=>import('@/views/pages/home/Home.vue'),
            }
        ],

    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})

export default router