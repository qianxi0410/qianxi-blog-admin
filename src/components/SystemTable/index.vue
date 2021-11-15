<template>
  <div>
    <v-row class="justify-center pa-8">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-avatar size="100">
            <img :src="SYSTEM_INFO['AVATAR']" alt="qianxi" />
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
          <v-form v-model="valid1">
            <v-text-field
              v-model="SYSTEM_INFO['AVATAR']"
              label="Src"
              required
              :rules="rules"
              clearable
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="1" class="mt-3">
          <v-btn
            color="primary"
            plain
            :disabled="!valid1"
            text
            @click="update('AVATAR')"
          >
            update
          </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-transition>

    <v-divider />

    <v-row class="pa-8">
      <v-carousel show-arrows-on-hover>
        <v-hover>
          <template v-slot:default="{ hover }">
            <div>
              <v-carousel-item
                v-for="(k, i) in keys"
                :key="i"
                :src="SYSTEM_INFO[k]"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute>
                    <v-btn plain text rounded @click="handleClick(k)">{{
                      text2
                    }}</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-carousel-item>
            </div>
          </template>
        </v-hover>
      </v-carousel>
    </v-row>

    <v-slide-x-transition>
      <v-row class="justify-center" v-if="imgInputShow">
        <v-col cols="5">
          <v-form v-model="valid2">
            <v-text-field
              v-model="SYSTEM_INFO[key]"
              label="Src"
              required
              clearable
              :rules="rules"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="1" class="mt-3">
          <v-btn
            color="primary"
            plain
            :disabled="!valid2"
            text
            @click="update(key)"
          >
            update
          </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-transition>
  </div>
</template>

<script lang="ts">
import { SystemInfo } from '@/types';
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const system = namespace('system');

@Component
export default class SystemTable extends Vue {
  @system.Getter('SYSTEM_INFO') SYSTEM_INFO!: SystemInfo;

  key = '';

  valid1 = true;
  valid2 = true;

  rules = [
    (v: string) => !!v || 'Url is required',
    (v: string) =>
      new RegExp(
        'https://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
      ).test(v) || 'Url must be https',
  ];

  keys = [
    'BG-1-LIGHT',
    'BG-1-DARK',
    'BG-2-LIGHT',
    'BG-2-DARK',
    'BG-3-LIGHT',
    'BG-3-DARK',
  ];

  avatarInputShow = false;

  imgInputShow = false;

  handleClick(k: string) {
    this.key = k;
    this.imgInputShow = !this.imgInputShow;
  }

  @system.Action('updateSysInfo') _updateSysInfo!: (
    // eslint-disable-next-line no-unused-vars
    arr: [string, string]
  ) => Promise<null>;

  async update(key: string) {
    await this._updateSysInfo([key, this.SYSTEM_INFO[key]]);
    this.avatarInputShow = false;
    this.imgInputShow = false;
  }

  get text(): string {
    if (!this.avatarInputShow) {
      return 'Change';
    }
    return 'Close';
  }

  get text2(): string {
    if (!this.imgInputShow) {
      return 'Change';
    }
    return 'Close';
  }
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
