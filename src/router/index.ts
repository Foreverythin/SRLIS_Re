import { createRouter, createWebHashHistory } from 'vue-router'

import Root from '../views/root/index.vue'
import Home from '../views/home/index.vue'
import Empty from '../views/empty/index.vue'
import BasicInfo from '../views/basicInfo/index.vue'
import ResearchDirection from '../views/researchDirection/index.vue'
import Committee from '../views/committee/index.vue'
import OperatingStatus from '../views/operatingStatus/index.vue'
import Assessment from '../views/assessment/index.vue'
import Introduction from '../views/introduction/index.vue'
import MaterialReview from '../views/materialReview/index.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        component: Root,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'basicInfo',
                name: 'basicInfo',
                component: BasicInfo
            },
            {
                path: 'researchDirection',
                name: 'researchDirection',
                component: ResearchDirection
            },
            {
                path: 'committee',
                name: 'committee',
                component: Committee
            },
            {
                path: 'operatingStatus',
                name: 'operatingStatus',
                component: OperatingStatus
            },
            {
                path: 'assessment',
                name: 'assessment',
                component: Assessment
            },
            {
                path: 'introduction',
                name: 'introduction',
                component: Introduction
            },
            {
                path: 'materialReview',
                name: 'materialReview',
                component: MaterialReview
            }
        ]
    },
    {
        path: '/empty',
        name: 'empty',
        component: Empty
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 拦截器
router.beforeEach((to, from, next) => {
    if (to.name === 'root') {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router
