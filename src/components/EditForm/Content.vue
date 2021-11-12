<template>
  <v-textarea
    class="mt-3"
    height="520px"
    outlined
    counter
    label="Please input your content"
    v-model="_content"
  ></v-textarea>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @PropSync('content', { type: String }) readonly _content!: string;
}
</script>
