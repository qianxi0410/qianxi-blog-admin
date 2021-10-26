<template>
  <v-app>
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <v-main>
      <div style="height: 10000px"></div>
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Navbar from '../../components/Navbar/index.vue';

@Component({
  components: {
    Navbar,
  },
})
export default class Dashboard extends Vue {}
</script>
