<template>
  <v-row class="pa-8">
    <v-col>
      <v-card elevation="3" dark color="#26A69A" flat>
        <v-card-text class="justify-center"
          ><span class="text-h5">周访问趋势</span></v-card-text
        >
        <v-sparkline
          line-width="2"
          type="trend"
          smooth
          color="#E3F2FD"
          label-size="10px"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
          :value="value"
          auto-draw
        >
          <template v-slot:label="item"> {{ item.value }} </template>
        </v-sparkline>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const system = namespace('system');

@Component
export default class Chart extends Vue {
  value: number[] = [];

  @system.Action('weekVisitTrending') weekVisitTrending!: () => Promise<
    Array<number>
  >;

  mounted(): void {
    this.weekVisitTrending().then((res) => {
      this.value = res;
    });
  }
}
</script>
