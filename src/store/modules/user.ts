import { login } from '@/api/user';
import { UserInfo } from '@/types';
import { setToken } from '@/utils/auth';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class User extends VuexModule {
  public _token: string = 'token from vuex';

  @Mutation
  public SET_TOKEN(token: string): void {
    this._token = token;
  }

  get TOKEN(): string {
    return this._token;
  }

  @Action({ rawError: true })
  public async login(userInfo: UserInfo): Promise<unknown> {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password.trim() })
        .then((response) => {
          const { data: res } = response;
          this.context.commit('SET_TOKEN', (res.data as any).token);
          setToken(res.data);
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default User;
