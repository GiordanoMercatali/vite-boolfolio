import {
    createRouter,
    createWebHistory
} from 'vue-router';

import AppHome from './static_pages/AppHome.vue';
import AppAbout from './static_pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
    ]
});

export {router};