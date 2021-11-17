import { Comment, Response } from '@/types';
import { AxiosPromise } from 'axios';
import request from '../axios/index';
import { Post } from '@/types';

import store from '@/store';

// 获取博文评论等的计数
export function counts() {
  return request({
    url: `/admin/countinfo`,
    method: 'GET',
  }) as AxiosPromise<Response<number[]>>;
}

export function posts(page: number, size: number) {
  return request({
    url: `/admin/post/page/${page}/size/${size}`,
    method: 'GET',
  }) as AxiosPromise<Response<Post[]>>;
}

export function update(post: Post, page: number, size: number) {
  return request({
    url: `/admin/post/update`,
    method: 'POST',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
    data: {
      id: post.id,
      created_at: new Date(post.created_at).getTime() / 1000,
      title: post.title,
      description: post.description.String,
      pre: post.pre,
      next: post.next,
      url: post.url,
      path: post.path,
      tags: post.tags.String,
      page: page,
      size: size,
      blur: post.blur,
    },
  });
}

export function updateWithContent(post: Post, page: number, size: number) {
  return request({
    url: `/admin/post/update/content`,
    method: 'POST',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
    data: {
      id: post.id,
      created_at: new Date(post.created_at).getTime() / 1000,
      title: post.title,
      description: post.description.String,
      pre: post.pre,
      next: post.next,
      url: post.url,
      path: post.path,
      tags: post.tags.String,
      page: page,
      size: size,
      blur: post.blur,
    },
  });
}

export function post(id: number) {
  return request({
    url: `/admin/post/id/${id}`,
    method: 'GET',
  }) as AxiosPromise<Response<Post>>;
}

export function _delete(id: number, page: number, size: number) {
  return request({
    url: `/admin/post/id/${id}/page/${page}/size/${size}`,
    method: 'DELETE',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
  }) as AxiosPromise<Response<null>>;
}

export function upload(post: Post) {
  return request({
    url: `/admin/post/insert`,
    method: 'POST',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
    data: {
      title: post.title,
      url: post.url,
      description: post.description.String,
      tags: post.tags.String,
      path: post.path,
      blur: post.blur,
    },
  }) as AxiosPromise<Response<null>>;
}

export function comments(page: number, size: number) {
  return request({
    url: `/admin/comment/page/${page}/size/${size}`,
    method: 'GET',
  }) as AxiosPromise<Response<Comment[]>>;
}

export function deleteComment(id: number, postId: number) {
  return request({
    url: `/admin/comment/id/${id}/postid/${postId}`,
    method: 'DELETE',
    headers: {
      authorization: store.getters['user/TOKEN'],
    },
  }) as AxiosPromise<Response<null>>;
}
