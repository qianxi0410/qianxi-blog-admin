<template>
  <v-container> <SystemTable /> </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import SystemTable from '../../components/SystemTable/index.vue';

@Component({
  components: {
    SystemTable,
  },
})
export default class System extends Vue {}
</script>
