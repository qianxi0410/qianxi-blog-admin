<template>
  <v-app-bar color="primary" dark flat>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>千禧's Blog</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-avatar v-ripple class="mr-8">
      <img
        src="https://pic4.zhimg.com/v2-290954bf6af107f2b26ff72a1b593ef6_xl.jpg"
        alt="qianxi"
      />
    </v-avatar>

    <v-btn icon>
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  drawer = false;
}
</script>
