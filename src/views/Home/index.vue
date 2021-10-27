<template>
  <v-container fluid>
    <Counts />
    <v-divider />
    <Chart />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Chart from '../../components/Chart/index.vue';
import Counts from '../../components/Counts/index.vue';

@Component({
  components: {
    Chart,
    Counts,
  },
})
export default class Home extends Vue {}
</script>
