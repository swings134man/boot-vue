import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ErrorPage from "@/components/ErrorPage";
import PracticePage from "@/components/PracticePage";
import HomePage from "@/components/HomePage";
import AlonePage from "@/components/AlonePage";
import DataBinding from "@/components/DataBinding";
import AxiosConServer from "@/components/AxiosConServer";
import HomeModal from "@/components/modal/HomeModal";
import SumTestPage from "@/components/pages/SumTestPage";
import ElPlusTable from "@/components/pages/ElPlusTable";
import MapTestPage from "@/components/pages/MapTestPage";

const routes = [ //path 별 component 추가
        {path: "/", name:'HomePage', component: HomePage},
        {path: "/modal/:id", name:'HomeModal', component: HomeModal},
        // {path: "/modal", name:'HomeModal', component: HomeModal, props: true},
        {path: "/hello", name:'HelloWorld', component: HelloWorld},
        {path: '/error', name:'ErrorPage', component: ErrorPage},
        {path: '/test', name:'PracticePage', component: PracticePage},
        {path: '/alone', name:'AlonePage', component: AlonePage},
        {path: '/data', name:'DataBinding', component: DataBinding},
        {path: '/sum', name:'SumTest', component: SumTestPage},
        {path: '/manyTable', name:'ManyTable', component: () => import("@/components/pages/ManyTableTest.vue")},
        {path: '/server', name:'AxiosConServer', component: AxiosConServer},
        {path: '/mapTest', name:'MapTestPage', component: MapTestPage},
    ];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;