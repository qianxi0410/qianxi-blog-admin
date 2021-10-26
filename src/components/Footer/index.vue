<template>
  <v-footer app color="primary">
    <v-col class="text-center" cols="12">
      2021 - {{ new Date().getFullYear() }} <strong>@qianxi</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
