<template>
  <transition name="slide-x-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';
const system = namespace('system');
const blog = namespace('blog');

@Component
export default class App extends Vue {
  @system.Action('getSystemInfo') _getSystemInfo!: () => Promise<null>;
  @blog.Action('getCountInfo') _getCountInfo!: () => Promise<unknown>;

  async mounted() {
    await Promise.all([this._getSystemInfo(), this._getCountInfo()]);
  }
}
</script>
