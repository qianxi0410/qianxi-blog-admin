<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <BlogTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import BlogTable from '../../components/BlogTable/index.vue';

@Component({
  components: {
    BlogTable,
  },
})
export default class Blogs extends Vue {}
</script>
