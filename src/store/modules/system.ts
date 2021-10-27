import { weekVisitTrending } from '@/api/blog';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class System extends VuexModule {
  // sidebar是否缩小
  public _mini: boolean = false;

  @Mutation
  public SET_MINI(mini: boolean): void {
    this._mini = mini;
  }

  get MINI(): boolean {
    return this._mini;
  }

  // 一周访问计数
  @Action
  public weekVisitTrending(): Promise<Array<number>> {
    return new Promise((resolve, reject) => {
      weekVisitTrending()
        .then((response) => {
          const { data: res } = response;
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default System;
