<template>
  <v-row class="pa-8">
    <v-col cols="3" v-for="i in 4" :key="i">
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 10 : 3" dark :color="colors[i - 1]">
          <v-card-text>
            <p class="text-h4">{{ counts[i - 1] }}</p>
            <span>{{ names[i - 1] }}</span>
          </v-card-text>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn rounded plain>See more info</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const blog = namespace('blog');

@Component
export default class Counts extends Vue {
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
