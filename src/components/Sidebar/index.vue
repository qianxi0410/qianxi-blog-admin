<template>
  <v-navigation-drawer
    src="https://w.wallhaven.cc/full/k7/wallhaven-k7l81m.jpg"
    app
    :mini-variant="mini"
    permanent
    dark
  >
    <v-list shaped>
      <v-list-item-group>
        <v-list-item
          active-class="active"
          v-for="item in items"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
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
    { title: 'System', icon: 'mdi-account', path: '/system' },
    { title: 'Blogs', icon: 'mdi-post', path: '/blogs' },
    { title: 'Comments', icon: 'mdi-comment', path: '/comments' },
    { title: 'Edit', icon: 'mdi-pencil', path: '/edit' },
  ];

  @system.Getter('MINI') mini!: () => boolean;

  // eslint-disable-next-line no-unused-vars
  @system.Mutation('SET_MINI') setMini!: (mini: boolean) => void;
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
