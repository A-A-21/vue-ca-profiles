import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import PublicPage from "../pages/PublicPage.vue";
import ProtectedPage from "../pages/ProtectedPage.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/public",
        name: "public",
        component: PublicPage,
    },
    {
        path: "/protected",
        name: "protected",
        component: ProtectedPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const isAuthenticated = Boolean(localStorage.getItem("auth"));

router.beforeEach((to, from, next) => {
    if (to.name === "protected" && !isAuthenticated) next("/");
    else next();
});

export default router;
