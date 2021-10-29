<template>
  <v-textarea
    class="mt-3"
    height="520px"
    outlined
    counter
    label="Please input your content"
    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
  ></v-textarea>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Content extends Vue {}
</script>
