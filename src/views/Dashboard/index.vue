<template>
  <v-app>
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <Sidebar />
    <v-main class="color">
      <transition>
        <router-view />
      </transition>
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

<style scoped>
.color {
  background-color: rgb(236, 231, 231);
}
</style>
