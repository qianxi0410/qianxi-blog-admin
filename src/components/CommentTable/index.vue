<template>
  <v-data-table
    :headers="headers"
    :items="comments"
    class="elevation-3"
    :footer-props="footerProps"
    :server-items-length="total"
    @update:page="updatePage"
    @update:items-per-page="updateItemsPerPage"
    :items-per-page="pageQuery.size"
    :loading="loading"
  >
    <template v-slot:item.created_at="{ item }">
      {{ new Date(item.created_at).toLocaleString() }}
    </template>

    <template v-slot:item.avatar="{ item }">
      <v-avatar size="60">
        <v-img :src="item.avatar"></v-img>
      </v-avatar>
    </template>

    <template v-slot:item.login="{ item }">
      <a target="_blank" style="" :href="`https://github.com/${item.login}`">{{
        item.login
      }}</a>
    </template>

    <template v-slot:item.actions="{ item }">
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
              >After confirming once, do you really plan to delete
              <span style="color: red"> {{ item.name }}</span
              >'s comment ?</v-card-text
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
import { Comment, PageQuery } from '@/types';
import { Vue, Component, Watch } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const blog = namespace('blog');

@Component
export default class CommentTable extends Vue {
  loading = false;

  @blog.Getter('COMMENT_COUNT') total!: number;

  pageQuery: PageQuery = {
    page: 1,
    size: 5,
  };

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
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Time', value: 'created_at', sortable: false },
    { text: 'Avatar', value: 'avatar', sortable: false },
    { text: 'Content', value: 'content', sortable: false, width: '400' },
    { text: 'Login', value: 'login', sortable: false, cellClass: 'link' },
    {
      text: 'Actions',
      value: 'actions',
      sortable: false,
      align: 'center',
    },
  ];

  comments: Comment[] = [];

  @blog.Action('getComments') _getComments!: (
    // eslint-disable-next-line no-unused-vars
    pageQuery: PageQuery
  ) => Promise<Comment[]>;

  @blog.Action('_deleteComment') _deleteComment!: (
    // eslint-disable-next-line no-unused-vars
    arr: [number, number]
  ) => Promise<null>;

  async deleteItem(item: Comment) {
    const { id, post_id } = item;
    console.log(id, post_id);

    await this._deleteComment([id, post_id]);
    await this.refetchComments(this.pageQuery);
  }

  @Watch('pageQuery', { deep: true, immediate: true })
  async refetchComments(newVal: PageQuery) {
    this.loading = true;
    const res = await this._getComments(newVal);
    this.comments = res;
    this.loading = false;
  }
}
</script>

<style scoped>
.link a {
  text-decoration: none;
  position: relative;
  color: black;
}

.link a:after {
  content: '';
  position: absolute;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgb(39, 63, 199);
  opacity: 0.2;
  margin-right: 0.1rem;
  margin-left: 0.1rem;
}

.link a:hover:after {
  top: 0%;
}
</style>
