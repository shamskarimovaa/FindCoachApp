import { createRouter, createWebHistory } from "vue-router";

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import CoachRequest from './pages/coaches/CoachRequest.vue';
import RequestsList from './pages/coaches/RequestsList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coached/:id",
      component: CoachDetail,
      children: [{ path: "contact", component: CoachRequest }],
    },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestsList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
