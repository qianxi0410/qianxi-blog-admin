import store from '@/store';

export function getToken(): string {
  return store.getters['user/TOKEN'];
}

export function removeToken() {
  return store.commit('REMOVE_TOKEN');
}
