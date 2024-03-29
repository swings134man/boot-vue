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
import DayJsMake from "@/components/pages/DayJsMake";
import DataSortingTest from "@/components/pages/DataSortingTest";
import CountDown from "@/components/pages/CountDown.vue";
import ErrorTest from "@/components/pages/ErrorTest.vue";

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
        {path: '/elTest', name:'ElTest', component: ElPlusTable},
        {path: '/mapTest', name:'MapTestPage', component: MapTestPage},
        {path: '/dayJsTest', name:'DayJsTest', component: DayJsMake},
        {path: '/dataSorting', name:'DataSorting', component: DataSortingTest},
        {path: '/countDown', name:'CountDown', component: CountDown},
        {path: '/errorTest', name:'ErrorTest', component: ErrorTest},
    ];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;