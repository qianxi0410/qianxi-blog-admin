import { AxiosPromise } from 'axios';
import request from '../axios/index';
import { Response } from '@/types';

import store from '@/store';

// 获取系统信息
export function systemInfo() {
  return request({
    url: `/admin/system`,
    method: 'GET',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
  }) as AxiosPromise<Response<Map<string, string>>>;
}

// 更新系统信息
export function updateSystemInfo(key: string, value: string) {
  return request({
    url: `/admin/system/update`,
    method: 'POST',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
    data: {
      key: key,
      value: value,
    },
  });
}
