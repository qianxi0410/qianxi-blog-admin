<template>
  <v-container fluid>
    <v-row class="pa-8">
      <v-col cols="3" v-for="i in 4" :key="i">
        <v-card dark :color="colors[i - 1]">
          <v-card-text>
            <p class="text-h4">{{ counts[i - 1] }}</p>
            <span>{{ names[i - 1] }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const blog = namespace('blog');

@Component
export default class Home extends Vue {
  counts: number[] = [];
  names: string[] = ['文章数量', '评论数量', '访问次数', '访问人数'];
  colors: string[] = ['#17A2B8', '#28A745', '#FFC107', '#F4BAC6'];

  @blog.Action('getCounts') getCounts!: () => Promise<Array<number>>;

  mounted(): void {
    this.getCounts().then((res) => {
      this.counts = res;
    });
  }
}
</script>
