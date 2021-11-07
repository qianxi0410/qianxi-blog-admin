import { login } from '@/api/user';
import { UserInfo } from '@/types';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { Response } from '@/types';

@Module({ namespaced: true })
class User extends VuexModule {
  public _token: string = '';

  @Mutation
  public SET_TOKEN(token: string): void {
    this._token = token;
    localStorage.setItem('TOKEN', token);
  }

  @Mutation
  public REMOVE_TOKEN(): void {
    this._token = '';
    localStorage.removeItem('TOKEN');
  }

  get TOKEN(): string {
    if (this._token !== '') {
      return this._token;
    } else {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        return token;
      } else {
        return '';
      }
    }
  }

  @Action({ rawError: true })
  public async login(userInfo: UserInfo): Promise<Response<string>> {
    const { name, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ name: name.trim(), password: password.trim() })
        .then((response) => {
          const { data: res } = response;
          this.context.commit('SET_TOKEN', res.data || '');
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default User;
