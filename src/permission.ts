import { NavigationGuardNext, Route } from 'vue-router';
import router from './router';
// import { getToken } from './utils/auth';

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  //   const token = getToken();

  //   if (token) {
  //     // have token
  //     if (to.path === '/login') {
  //       next({ path: '/dashboard' });
  //     } else {
  //       next();
  //     }
  //   } else {
  //     next({ path: '/login' });
  //   }

  if (to.path !== '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});
