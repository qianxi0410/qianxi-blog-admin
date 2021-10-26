<template>
  <v-app>
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <v-main>
      <div style="height: 1000px"></div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Navbar from '../../components/Navbar/index.vue';
import Footer from '../../components/Footer/index.vue';

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class Dashboard extends Vue {}
</script>
