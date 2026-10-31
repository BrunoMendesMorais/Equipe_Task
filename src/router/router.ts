import type { RouteRecordRaw } from "vue-router";
import HomeComponent from "@/component/HomeComponent.vue";

import TelaTaskComponent from "@/component/TelaTaskComponent.vue";

export const routers: RouteRecordRaw[] = [
    {
        path: "/",
        component: HomeComponent
    },
    {
        path:"/tarefas",
        component: TelaTaskComponent
    }
]