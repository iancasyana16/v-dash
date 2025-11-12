import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/dashboard/Dashboard.vue";
import Card from "@/views/dashboard/Card.vue";
import Login from "@/views/auth/Login.vue";
import Input from "@/views/dashboard/Input.vue";
import Forbidden from "@/views/pages/Forbidden.vue";
import NotFound from "@/views/pages/NotFound.vue";
import Page from "@/views/dashboard/Page.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login,
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/card",
            name: "Card",
            component: Card,
        },
        {
            path: "/input",
            name: "Input",
            component: Input,
        },
        {
            path: "/pages",
            name: "Pages",
            component: Page,
        },
        {
            path: "/404",
            name: "Error Page",
            component: NotFound,
        },
        {
            path: "/403",
            name: "Forbidden Page",
            component: Forbidden,
        },
    ],
});

export default router;
