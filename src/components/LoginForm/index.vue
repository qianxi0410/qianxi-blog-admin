<template>
  <v-img
    :width="img.width"
    :height="img.height"
    src="https://w.wallhaven.cc/full/wq/wallhaven-wqdglr.jpg"
  >
    <v-container>
      <v-row align="center" justify="center" class="my-12">
        <v-col class="col-sm-8 col-md-6 col-12">
          <v-card>
            <v-toolbar color="primary" dark>
              <v-btn
                href="https://blog.qianx1.xyz"
                plain
                fab
                rounded
                class="mr-3"
              >
                <v-icon large>mdi-home</v-icon>
              </v-btn>
              <v-toolbar-title> 千禧's Blog </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="center">
              <div class="text-h6">
                This is the gate of destiny, do you have the key ?
              </div>
            </v-card-text>

            <v-card-text class="center">
              <v-avatar size="80">
                <v-img alt="qianxi" :src="SYSTEM_INFO['AVATAR']"></v-img>
              </v-avatar>
            </v-card-text>
            <Form />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Form from './form.vue';
import { namespace } from 'vuex-class';
import { System } from '@/types';

const system = namespace('system');

@Component({
  components: {
    Form,
  },
})
export default class LoginForm extends Vue {
  img = {
    width: 0,
    height: 0,
  };

  @system.Getter('SYSTEM_INFO') SYSTEM_INFO!: System;

  // 适配图像大小
  adapter(): void {
    this.img.height = document.body.offsetHeight;
    this.img.width = document.body.offsetWidth;
  }

  mounted(): void {
    this.adapter();
    window.addEventListener('resize', this.adapter);
  }

  unmounted(): void {
    window.removeEventListener('resize', this.adapter);
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  margin: 0 auto;
}
</style>
