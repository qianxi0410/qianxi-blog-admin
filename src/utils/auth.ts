import store from '@/store';
import { Response } from '@/types';

export function getToken(): string {
  return store.getters['user/TOKEN'];
}

export function removeToken() {
  return store.commit('REMOVE_TOKEN');
}

export async function checkTokenValid() {
  const res = (await store.dispatch(
    'user/checkTokenValid'
  )) as Response<boolean>;
  if (res.code === 666 && res.data === true) {
    return true;
  }
  return false;
}
