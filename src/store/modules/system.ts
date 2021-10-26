import { VuexModule, Module, Mutation } from 'vuex-module-decorators';

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
}

export default System;
