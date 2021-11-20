import store from '@/store';
import { Response, UserInfo } from '@/types';
import { AxiosPromise } from 'axios';
import request from '../axios/index';

export function login(data: UserInfo) {
  return request({
    url: `/user/login`,
    method: 'POST',
    data,
  }) as AxiosPromise<Response<string>>;
}

export function tokenValid() {
  return request({
    url: `/user/tokenvalid`,
    method: `GET`,
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
  }) as AxiosPromise<Response<boolean>>;
}
