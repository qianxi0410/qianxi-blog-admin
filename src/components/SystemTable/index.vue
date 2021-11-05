<template>
  <div>
    <v-row class="justify-center pa-8">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-avatar size="100">
            <img :src="avatarSrc" alt="qianxi" />
            <v-fade-transition>
              <v-overlay v-if="hover" absolute>
                <v-btn
                  x-small
                  plain
                  small
                  @click="avatarInputShow = !avatarInputShow"
                  >{{ text }}</v-btn
                >
              </v-overlay>
            </v-fade-transition>
          </v-avatar>
        </template>
      </v-hover>
    </v-row>
    <v-slide-x-transition>
      <v-row class="justify-center" v-if="avatarInputShow">
        <v-col cols="5">
          <v-text-field
            v-model="avatarSrc"
            label="Src"
            required
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="1" class="mt-3">
          <!-- TODO: update -->
          <v-btn plain text> update </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-transition>

    <v-divider />

    <v-row class="pa-8">
      <v-carousel
        show-arrows-on-hover
        @change="this.mottoAndImgInputShow = false"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row class="fill-height" align="center" justify="center">
            <p @click="change(item, i)" class="text-h4 cursor">
              {{ item.motto }}
            </p>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-slide-x-transition>
      <v-row class="justify-center" v-if="mottoAndImgInputShow">
        <v-col cols="5">
          <v-text-field
            v-model="mottoAndImg.src"
            label="Src"
            required
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="1" class="mt-3">
          <!-- TODO: update -->
          <v-btn plain text> update </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-transition>
    <v-scroll-x-reverse-transition>
      <v-row class="justify-center" v-if="mottoAndImgInputShow">
        <v-col cols="5">
          <v-text-field
            v-model="mottoAndImg.motto"
            label="Motto"
            required
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="1" class="mt-3">
          <!-- TODO: update -->
          <v-btn plain text> update </v-btn>
        </v-col>
      </v-row>
    </v-scroll-x-reverse-transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SystemTable extends Vue {
  items = [
    {
      src: 'https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png',
      motto: 'this is me',
    },
    {
      src: 'https://w.wallhaven.cc/full/6o/wallhaven-6ople6.png',
      motto: 'this is you',
    },
  ];

  avatarInputShow = false;

  mottoAndImgInputShow = false;

  mottoAndImg = {};

  avatarSrc =
    'https://pic4.zhimg.com/v2-290954bf6af107f2b26ff72a1b593ef6_xl.jpg';

  get text(): string {
    if (!this.avatarInputShow) {
      return 'Change';
    }
    return 'Close';
  }

  change(item: any, i: number) {
    this.mottoAndImg = this.items[i];
    this.mottoAndImgInputShow = !this.mottoAndImgInputShow;
  }
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
