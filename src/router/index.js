import { createRouter, createWebHistory } from "vue-router";

import ErrorPage from "@/views/dashboard/ErrorPage.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/404',
        name: 'Error Page',
        component: ErrorPage
      }
    ],
});

export default router;
