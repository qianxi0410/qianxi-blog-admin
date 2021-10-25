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
