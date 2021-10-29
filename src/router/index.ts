import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(
        /* webpackChunckName: "dashboard" */ '../views/Dashboard/index.vue'
      ),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () =>
          import(
            /* webpackChunckName: "dashboard" */ '../views/Home/index.vue'
          ),
      },
      {
        path: '/system',
        name: 'System',
        component: () =>
          import(
            /* webpackChunckName: "dashboard" */ '../views/System/index.vue'
          ),
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: () =>
          import(
            /* webpackChunckName: "dashboard" */ '../views/Blogs/index.vue'
          ),
      },
      {
        path: '/comments',
        name: 'Comments',
        component: () =>
          import(
            /* webpackChunckName: "dashboard" */ '../views/Comments/index.vue'
          ),
      },
      {
        path: '/edit',
        name: 'Edit',
        component: () =>
          import(
            /* webpackChunckName: "dashboard" */ '../views/Edit/index.vue'
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
