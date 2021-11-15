<template>
  <div style="overflow: hidden" ref="mk" v-html="html"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
// import Ink from '@writewithocto/vue-ink';
import { marked } from 'marked';

@Component
export default class Preview extends Vue {
  @Prop(String) content!: string;

  // html = '';

  // @Watch('content')
  // render(newVal: string) {
  //   this.html = marked.parse(newVal);
  // }

  // created() {
  //   this.html = marked.parse(this.content);
  // }
  get html(): string {
    return marked.parse(this.content);
  }
}
</script>
