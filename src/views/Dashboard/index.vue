<template>
  <v-app>
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <Sidebar />
    <v-main>
      <div style="height: 100px">
        <h1 v-for="i in 40" :key="i">main</h1>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Navbar from '../../components/Navbar/index.vue';
import Footer from '../../components/Footer/index.vue';
import Sidebar from '../../components/Sidebar/index.vue';

@Component({
  components: {
    Navbar,
    Footer,
    Sidebar,
  },
})
export default class Dashboard extends Vue {}
</script>
