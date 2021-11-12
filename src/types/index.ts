export interface Response<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

export interface UserInfo {
  name: string;
  password: string;
}

export interface NullString {
  String: string;
  Valid: boolean;
}

export interface NullBoolean {
  Boolean: boolean;
  Valid: boolean;
}

export interface Post {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  description: NullString;
  pre: number;
  next: number;
  url: string;
  path: string;
  tags: NullString;
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

export interface PageQuery {
  page: number;
  size: number;
}
