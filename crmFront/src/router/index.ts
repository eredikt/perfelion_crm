import {createRouter, createWebHistory} from "vue-router";
import {isAuth} from "@/router/middleware/auth.ts";
import {routesName} from "@/common/routeName.ts";

const routes = [
    {
        path: '/',
        component: () => import('@/layout/Default.vue'),
        beforeEnter: [isAuth],
        name: routesName.GENERAL,
    },
    {
        path: '/crm',
        name: routesName.CRM,
        beforeEnter: [isAuth],
        component: () => import('@/layout/AuthClient.vue'),
        redirect: {name: 'crm_goods'},
        children: [
            {
                path: 'goods',
                name: routesName.CRM_GOODS,
                component: () => import('@/pages/goods.vue'),
                meta: {transition: 'slide-left'}
            },
            {
                path: 'warehouse',
                name: routesName.CRM_WAREHOUSE,
                component: () => import('@/pages/goods.vue'),
                meta: {transition: 'slide-left'}
            },
            {
                path: 'analytics',
                name: routesName.CRM_ANALYTICS,
                component: () => import('@/pages/goods.vue'),
                meta: {transition: 'slide-left'}
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});
export default router