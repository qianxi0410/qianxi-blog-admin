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
  blur: number;
}

export interface Comment {
  id: number;
  created_at: Date;
  updated_at: Date;
  content: string;
  login: string;
  name: string;
  avatar: string;
  post_id: number;
}

export interface PageQuery {
  page: number;
  size: number;
}

export interface SystemInfo {
  [index: string]: string;
  AVATAR: string;
  'BG-1-LIGHT': string;
  'BG-1-DARK': string;
  'BG-2-LIGHT': string;
  'BG-2-DARK': string;
  'BG-3-LIGHT': string;
  'BG-3-DARK': string;
}
