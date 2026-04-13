import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/projectgen'
    },
    {
        path: '/projectgen',
        name: 'projectgen',
        component: () => import(/* webpackChunkName: "ProjectGen" */ '@/views/Project/ProjectGen.vue')
    },
    {
        path: '/projectdir',
        name: 'projectdir',
        component: () => import(/* webpackChunkName: "ProjectDir" */ '@/views/Project/ProjectDir.vue')
    },
    {
        path: '/projectrend',
        name: 'projectrend',
        component: () => import(/* webpackChunkName: "ProjectRend" */ '@/views/Project/ProjectRend.vue')
    },
    {
        path: '/vuedirective',
        name: 'vuedirective',
        component: () => import(/* webpackChunkName: "VueDirect" */ '@/views/Element/VueDirective.vue')
    },
    {
        path: '/vuecomponent',
        name: 'vuecomponent',
        component: () => import(/* webpackChunkName: "VueComponent" */ '@/views/Element/VueComponent.vue')
    },
    {
        path: '/vuerouter',
        name: 'vuerouter',
        component: () => import(/* webpackChunkName: "VueRouter" */ '@/views/Element/VueRouter.vue')
    },
    {
        path: '/vuevuex',
        name: 'vuevuex',
        component: () => import(/* webpackChunkName: "VueVuex" */ '@/views/Element/VueVuex.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
	routes: routes
});

export default router;