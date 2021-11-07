<template>
  <transition name="slide-x-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
