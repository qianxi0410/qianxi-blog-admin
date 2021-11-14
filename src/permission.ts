import { NavigationGuardNext, Route } from 'vue-router';
import router from './router';
import { checkTokenValid, getToken, removeToken } from '@/utils/auth';

router.beforeEach(async (to: Route, from: Route, next: NavigationGuardNext) => {
  const token = getToken();

  if (token) {
    let valid = false;
    try {
      valid = await checkTokenValid();
    } catch (err) {
      valid = false;
    }
    if (!valid) {
      removeToken();
      if (to.path === '/login') {
        next();
      } else {
        next({ path: '/login' });
      }
    }

    if (to.path === '/login') {
      next({ path: '/dashboard' });
    } else {
      next();
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});
