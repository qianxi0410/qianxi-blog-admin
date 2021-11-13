import { NavigationGuardNext, Route } from 'vue-router';
import router from './router';
import { checkTokenValid, getToken } from '@/utils/auth';

router.beforeEach(async (to: Route, from: Route, next: NavigationGuardNext) => {
  const token = getToken();

  if (token) {
    const valid = await checkTokenValid();
    if (!valid) {
      next({ path: '/login' });
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
