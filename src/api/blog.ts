import { Response } from '@/types';
import { AxiosPromise } from 'axios';
import request from '../axios/index';

// 获取博文评论等的计数
export function counts() {
  return request({
    url: `/blog/detail/count`,
    method: 'GET',
  }) as AxiosPromise<Response<Array<number>>>;
}
