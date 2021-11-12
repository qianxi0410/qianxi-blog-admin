import { PageQuery, Post } from '@/types';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import {
  counts,
  post,
  posts,
  update,
  updateWithContent,
  upload,
  _delete,
} from '../../api/blog';

@Module({ namespaced: true })
class Blog extends VuexModule {
  private _countinfo: Array<number> = [];

  get COUNTINFO(): Array<number> {
    return this._countinfo;
  }

  get BLOG_COUNT(): number {
    return this._countinfo[0];
  }

  get COMMNET_COUNT(): number {
    return this._countinfo[1];
  }

  @Mutation
  public SET_COUNTINFO(arr: Array<number>): void {
    this._countinfo = [...arr];
  }

  @Action
  public getCountInfo(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      counts()
        .then((response) => {
          const { data: res } = response;
          this.context.commit('SET_COUNTINFO', res.data);
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public getPosts(pageQuery: PageQuery): Promise<Post[]> {
    const { page, size } = pageQuery;

    return new Promise((resolve, reject) => {
      posts(page, size)
        .then((response) => {
          const { data: res } = response;
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public updatePost(arr: [Post, PageQuery]): Promise<unknown> {
    const { page, size } = arr[1];

    return new Promise((resolve, reject) => {
      update(arr[0], page, size)
        .then(() => {
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public updatePostWithContent(arr: [Post, PageQuery]): Promise<unknown> {
    const { page, size } = arr[1];

    return new Promise((resolve, reject) => {
      updateWithContent(arr[0], page, size)
        .then(() => {
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public deletePost(arr: [number, PageQuery]): Promise<null> {
    const { page, size } = arr[1];

    return new Promise((resolve, reject) => {
      _delete(arr[0], page, size)
        .then(() => {
          this.context.dispatch('getCountInfo');
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // 是否是更新文章
  private _postId: number = -1;

  get IS_UPDATE(): boolean {
    return this._postId !== -1;
  }

  get POST_ID(): number {
    return this._postId;
  }

  @Mutation
  public SET_POSTID(id: number) {
    this._postId = id;
  }

  @Action
  public getPost(id: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      post(id)
        .then((response) => {
          const { data: res } = response;
          this.context.commit('SET_POSTID', -1);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  @Action
  public uploadPost(post: Post): Promise<null> {
    return new Promise((resolve, reject) => {
      upload(post)
        .then(() => {
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Blog;
