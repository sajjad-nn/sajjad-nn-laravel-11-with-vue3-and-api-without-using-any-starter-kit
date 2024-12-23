import { useAuthStore } from "@/stores/Auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login.vue"),
            meta: { guest: true },
        },



        {
            path: "/register",
            name: "register",
            component: () => import("../views/register.vue"),
            meta: { guest: true },
        },
        {
            path: "/post",
            name: "post",
            component: () => import("../views/post.vue"),
            meta: { auth: true },
        },
        {
            path: "/createpost",
            name: "createpost",
            component: () => import("../views/create.vue"),
            meta: { auth: true },
        },

        {
            path: "/showpost/:id",
            name: "show",
            component: () => import("../views/show.vue"),

        },

        {
            path: "/update/:id",
            name: "update",
            component: () => import("../views/update.vue"),
            meta: { auth: true },

        },
    ],
});

router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    await authStore.getUser();

    if (authStore.user && to.meta.guest) {
        return { name: "home" };
    }

    if (!authStore.user && to.meta.auth) {
        return { name: "login" };
    }
});

export default router;
