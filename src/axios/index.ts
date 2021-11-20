import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrl } from '@/config';

// create an axios instance
const service = axios.create({
  baseURL: baseUrl,
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    return config;
  },
  (error: AxiosError) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response: AxiosResponse) => {
    // const res = response.data as Response;

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     store.dispatch('user/resetToken').then(() => {
    //       location.reload();
    //     });
    //   }
    //   return Promise.reject(new Error(res.msg || 'Error'));
    // } else {
    //   return res;
    // }
    return response;
  },
  (error: AxiosError) => {
    console.log('err' + error); // for debug

    return Promise.reject(error);
  }
);

export default service;
