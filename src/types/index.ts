export interface Response<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

export interface UserInfo {
  username: string;
  password: string;
}
