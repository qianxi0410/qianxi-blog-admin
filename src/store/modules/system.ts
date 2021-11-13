import { systemInfo, updateSystemInfo } from '@/api/system';
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
    return new Promise((resolve) => {
      // TODO:
      resolve([]);
    });
  }

  // 系统信息
  private _systemInfo: System | undefined = undefined;

  @Mutation
  public SET_SYSTEMINFO(m: System) {
    this._systemInfo = m;
  }

  get SYSTEM_INFO(): System {
    return this._systemInfo!;
  }

  @Action
  public getSystemInfo(): Promise<null> {
    return new Promise((resolve, reject) => {
      systemInfo()
        .then((response) => {
          const { data: res } = response;
          this.context.commit('SET_SYSTEMINFO', res.data);
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public updateSysInfo(arr: [string, string]): Promise<null> {
    return new Promise((resolve, reject) => {
      updateSystemInfo(arr[0], arr[1])
        .then(() => {
          this.context.dispatch('getSystemInfo');
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default System;
