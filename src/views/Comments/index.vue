<template>
  <v-container fluid>
    <v-row>
      <v-col> <CommentTable /> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CommentTable from '../../components/CommentTable/index.vue';

@Component({
  components: {
    CommentTable,
  },
})
export default class Comments extends Vue {}
</script>
