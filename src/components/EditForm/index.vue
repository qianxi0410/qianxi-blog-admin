<template>
  <v-row class="pa-8">
    <v-col cols="6">
      <v-tabs background-color="#ECE7E7" class="mt-n3">
        <v-tab @click="componentName = 'Content'">Content</v-tab>
        <v-tab @click="componentName = 'Preview'">Preview</v-tab>
      </v-tabs>
      <transition name="slide-x-transition" mode="out-in">
        <keep-alive>
          <component
            v-bind="props"
            @update:content="handleUpdate"
            :is="componentName"
          />
        </keep-alive>
      </transition>
    </v-col>
    <v-spacer />
    <v-col cols="5">
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="post.title"
          :counter="30"
          label="Title"
          required
          :rules="titleRules"
        ></v-text-field>

        <v-text-field
          v-model="post.description.String"
          :counter="50"
          label="Description"
          required
          :rules="descRules"
        ></v-text-field>

        <v-text-field
          :rules="urlRules"
          v-model="post.url"
          label="Url"
          required
        ></v-text-field>

        <v-scroll-x-reverse-transition mode="out-in">
          <template>
            <v-skeleton-loader
              v-if="post.url !== '' && !imgShow"
              class="mx-auto"
              max-height="200"
              type="image"
            ></v-skeleton-loader>
            <v-img v-else-if="imgShow" height="200" :src="post.url"></v-img>
          </template>
        </v-scroll-x-reverse-transition>

        <v-switch
          label="Blur"
          color="primary"
          value
          input-value="true"
        ></v-switch>

        <v-text-field
          v-model="post.tags.String"
          label="Tags"
          required
          :rules="tagRules"
          :counter="20"
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          block
          class="justify-end mt-3"
          color="primary"
          plain
          @click="submit"
        >
          Submit
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import Content from './Content.vue';
import Preview from './Preview.vue';
import { namespace } from 'vuex-class';
import { PageQuery, Post } from '@/types';

const blog = namespace('blog');

@Component({
  components: {
    Content,
    Preview,
  },
})
export default class EditForm extends Vue {
  valid = false;

  componentName = 'Content';

  urlRules = [
    (v: string) => !!v || 'Url is required',
    (v: string) =>
      new RegExp(
        'https://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
      ).test(v) || 'Url must be https',
  ];

  tagRules = [
    (v: string) => !!v || 'Tag is required',
    (v: string) => (v && v.length <= 30) || "Tag's length must less than 20",
    (v: string) =>
      new RegExp(
        '^[a-zA-Z0-9\u4e00-\u9fa5]+(\\-[a-zA-Z0-9\u4e00-\u9fa5]+)*$'
      ).test(v) || 'Tags must be split by `-`',
  ];

  titleRules = [
    (v: string) => !!v || 'Title is required',
    (v: string) => (v && v.length <= 30) || "Title's length must less than 30",
  ];

  descRules = [
    (v: string) => !!v || 'Description is required',
    (v: string) =>
      (v && v.length <= 50) || "Description's length must less than 50",
  ];

  post: Post = {
    id: 0,
    created_at: new Date(),
    updated_at: new Date(),
    title: '',
    description: {
      Valid: false,
      String: '',
    },
    pre: -1,
    next: -1,
    url: '',
    path: '',
    tags: {
      Valid: false,
      String: '',
    },
  };

  handleUpdate(content: string) {
    this.post.path = content;
  }

  get props(): object {
    if (this.componentName === 'Content') {
      return { content: this.post.path };
    }
    return {
      content: this.post.path,
    };
  }

  imgShow = false;

  @blog.Getter('IS_UPDATE') _isUpdate!: boolean;
  // eslint-disable-next-line no-unused-vars
  @blog.Action('getPost') _getPost!: (id: number) => Promise<Post>;

  @blog.Getter('POST_ID') _postId!: number;

  @blog.Action('updatePostWithContent') _updatePost!: (
    // eslint-disable-next-line no-unused-vars
    arr: [Post, PageQuery]
  ) => Promise<null>;

  // eslint-disable-next-line no-unused-vars
  @blog.Action('uploadPost') _uploadPost!: (post: Post) => Promise<null>;

  @Watch('post.url')
  load(newVal: string): void {
    this.imgShow = false;
    const img = new Image();
    img.src = newVal;
    img.onload = () => {
      this.imgShow = true;
    };
  }

  async submit() {
    if (this.post.id !== 0) {
      await this._updatePost([this.post, { page: 0, size: 0 }]);
    } else {
      await this._uploadPost(this.post);
    }
    this.post = {
      id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      title: '',
      description: {
        Valid: false,
        String: '',
      },
      pre: -1,
      next: -1,
      url: '',
      path: '',
      tags: {
        Valid: false,
        String: '',
      },
    };
  }

  async getPost() {
    let post = await this._getPost(this._postId);
    this.post = post;
  }

  async mounted() {
    if (this._isUpdate) {
      await this.getPost();
    }
  }
}
</script>
