<template>
  <v-data-table
    :headers="headers"
    :items="posts"
    class="elevation-3"
    :footer-props="footerProps"
    :server-items-length="total"
    @update:page="updatePage"
    @update:items-per-page="updateItemsPerPage"
    :items-per-page="pageQuery.size"
    :loading="loading"
  >
    <template v-slot:item.title="props">
      <v-edit-dialog
        @save="save(props.item)"
        :return-value.sync="props.item.title"
      >
        {{ props.item.title }}
        <template v-slot:input>
          <v-text-field
            v-model="props.item.title"
            :rules="[(v) => v.length <= 25 || 'Title too long!']"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </template>
      </v-edit-dialog>
    </template>

    <template v-slot:item.created_at="{ item }">
      {{ new Date(item.created_at).toLocaleString() }}
    </template>

    <template v-slot:item.description.String="props">
      <v-edit-dialog
        @save="save(props.item)"
        :return-value.sync="props.item.description.String"
      >
        {{ props.item.description.String }}
        <template v-slot:input>
          <v-text-field
            v-model="props.item.description.String"
            :rules="[(v) => v.length <= 30 || 'Description too long!']"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </template>
      </v-edit-dialog>
    </template>

    <template v-slot:item.url="props">
      <v-edit-dialog
        @save="save(props.item)"
        :return-value.sync="props.item.url"
      >
        <v-img
          class="pa-3"
          max-height="200px"
          max-width="200px"
          :src="props.item.url"
        ></v-img>
        <template v-slot:input>
          <v-text-field
            v-model="props.item.url"
            :rules="[(v) => v.length <= 255 || 'Url too long!']"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </template>
      </v-edit-dialog>
    </template>

    <template v-slot:item.tags.String="props">
      <v-edit-dialog
        @save="save(props.item)"
        :return-value.sync="props.item.tags.String"
      >
        <v-chip-group color="green">
          <v-chip
            v-for="(tag, index) in props.item.tags.String.split('-')"
            :key="index"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
        <template v-slot:input>
          <v-text-field
            v-model="props.item.tags.String"
            :rules="[(v) => v.length <= 20 || 'Tags too long!']"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </template>
      </v-edit-dialog>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon color="green" small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-dialog transition="dialog-bottom-transition" max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="red" small v-bind="attrs" v-on="on">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title class="text-h5"> Are your sure ? </v-card-title>
            <v-card-text
              >After confirming once, do you really plan to delete this article
              <span style="color: red">{{ item.title }}</span>
              ?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog.value = false">
                Disagree
              </v-btn>
              <v-btn
                color="red darken-1"
                text
                @click="deleteItem(item, dialog)"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { PageQuery, Post } from '@/types';
import { Vue, Component, Watch } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const blog = namespace('blog');

@Component
export default class BlogTable extends Vue {
  loading = false;

  pageQuery: PageQuery = {
    size: 5,
    page: 1,
  };

  @blog.Action('updatePost') _updatePost!: (
    // eslint-disable-next-line no-unused-vars
    arr: [Post, PageQuery]
  ) => Promise<unknown>;

  // eslint-disable-next-line no-unused-vars
  @blog.Mutation('SET_POSTID') _setPostId!: (id: number) => void;

  editItem(item: Post) {
    this._setPostId(item.id);
    this.$router.push({ path: '/edit' });
  }

  @blog.Action('deletePost') _deletePost!: (
    // eslint-disable-next-line no-unused-vars
    arr: [number, PageQuery]
  ) => Promise<null>;

  async deleteItem(item: Post, dialog: any) {
    await this._deletePost([item.id, this.pageQuery]);
    await this.refetchPosts(this.pageQuery);
    dialog.value = false;
  }

  async save(item: Post) {
    try {
      await this._updatePost([item, this.pageQuery]);
    } catch (e) {
      // TODO: need handle error
      console.log(e);
    }
  }

  @blog.Action('getPosts') _getPosts!: (
    // eslint-disable-next-line no-unused-vars
    pageQuery: PageQuery
  ) => Promise<Post[]>;

  @blog.Getter('BLOG_COUNT') total!: () => number;

  updatePage(curPage: number): void {
    this.pageQuery.page = curPage;
  }

  updateItemsPerPage(pageCount: number): void {
    this.pageQuery.size = pageCount;
  }

  footerProps = {
    showFirstLastPage: true,
    firstIcon: 'mdi-arrow-collapse-left',
    lastIcon: 'mdi-arrow-collapse-right',
  };

  headers = [
    {
      text: 'Title',
      align: 'start',
      sortable: false,
      value: 'title',
    },
    { text: 'Created', value: 'created_at', sortable: false },
    { text: 'Desc', value: 'description.String', sortable: false },
    { text: 'Img', value: 'url', sortable: false },
    { text: 'Tags', value: 'tags.String', sortable: false },
    { text: 'Actions', value: 'actions', sortable: false },
  ];
  posts: Post[] = [];

  @Watch('pageQuery', { deep: true, immediate: true })
  async refetchPosts(newVal: PageQuery) {
    this.loading = true;
    const res = await this._getPosts(newVal);
    this.posts = res;
    this.loading = false;
  }
}
</script>
