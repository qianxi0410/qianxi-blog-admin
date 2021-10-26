import { Action, Module, VuexModule } from 'vuex-module-decorators';
import { counts } from '../../api/blog';

@Module({ namespaced: true })
class Blog extends VuexModule {
  @Action
  public getCounts(): Promise<Array<number>> {
    return new Promise((resolve, reject) => {
      counts()
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

export default Blog;
