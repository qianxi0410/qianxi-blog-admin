<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="setMini(!mini)"></v-app-bar-nav-icon>

    <v-toolbar-title>千禧's Blog</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-avatar v-ripple class="mr-8">
      <img
        src="https://pic4.zhimg.com/v2-290954bf6af107f2b26ff72a1b593ef6_xl.jpg"
        alt="qianxi"
      />
    </v-avatar>

    <v-btn icon>
      <v-icon @click="logout">mdi-cog-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const system = namespace('system');
const user = namespace('user');

@Component
export default class Navbar extends Vue {
  @system.Getter('MINI') mini!: () => boolean;

  // eslint-disable-next-line no-unused-vars
  @system.Mutation('SET_MINI') setMini!: (mini: boolean) => void;

  @user.Mutation('REMOVE_TOKEN') _logout!: () => void;

  logout(): void {
    this._logout();
    this.$router.push({ path: '/login' });
  }
}
</script>
