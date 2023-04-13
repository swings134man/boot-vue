import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ErrorPage from "@/components/ErrorPage";
import PracticePage from "@/components/PracticePage";
import HomePage from "@/components/HomePage";
import AlonePage from "@/components/AlonePage";

const routes = [ //path 별 component 추가
        {path: "/", name:'HomePage', component: HomePage},
        {path: "/hello", name:'HelloWorld', component: HelloWorld},
        {path: '/error', name:'ErrorPage', component: ErrorPage},
        {path: '/test', name:'PracticePage', component: PracticePage},
        {path: '/alone', name:'AlonePage', component: AlonePage}
    ];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;