<template>
  <v-navigation-drawer
    src="https://w.wallhaven.cc/full/k7/wallhaven-k7l81m.jpg"
    app
    :mini-variant.sync="mini"
    permanent
    dark
  >
    <v-list>
      <v-list-item
        :href="item.path"
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const system = namespace('system');

@Component
export default class Sidebar extends Vue {
  items = [
    { title: 'Home', icon: 'mdi-home-city', path: '/home' },
    { title: 'User', icon: 'mdi-account', path: '/user' },
    { title: 'Blogs', icon: 'mdi-post', path: '/blogs' },
    { title: 'Comments', icon: 'mdi-comment', path: '/comments' },
  ];

  @system.Getter('MINI') mini!: () => boolean;

  // eslint-disable-next-line no-unused-vars
  @system.Mutation('SET_MINI') setMini!: (mini: boolean) => void;
}
</script>

<style lang="scss" scoped>
.c {
  color: #f5deb3;
}
</style>
