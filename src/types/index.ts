export interface Response<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

export interface UserInfo {
  username: string;
  password: string;
}

export interface Blog {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  pre: number;
  next: number;
  url: string;
  path: string;
  tags: string;
}

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  login: string;
  name: string;
  avatar: string;
  postId: number;
}
