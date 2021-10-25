<template>
  <v-form ref="form" v-model="valid" class="pa-4">
    <v-text-field
      outlined
      v-model="userInfo.username"
      :rules="[rules.required, rules.max]"
      hint="Characters <= 16"
      label="Username"
    >
      <v-icon slot="prepend" color="primary" class="mr-2"> mdi-account </v-icon>
    </v-text-field>
    <v-text-field
      outlined
      v-model="userInfo.password"
      :append-icon="isPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :rules="[rules.required, rules.min, rules.max]"
      :type="isPassword ? 'password' : 'text'"
      label="Password"
      counter
      hint="Characters >= 8 & <= 16"
      @click:append="isPassword = !isPassword"
    >
      <v-icon slot="prepend" color="primary" class="mr-2"> mdi-lock </v-icon>
    </v-text-field>
    <v-card-actions class="justify-end">
      <v-btn :disabled="!valid" text @click="login">Login</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script lang="ts">
import { UserInfo } from '@/types';
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class';

const user = namespace('user');

@Component
export default class Form extends Vue {
  valid = false;

  userInfo = {
    username: '',
    password: '',
  };

  isPassword: boolean = true;

  rules = {
    required: (value: string) => !!value || 'Required.',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    max: (v: string) => v.length <= 16 || 'Max 16 characters',
  };

  // eslint-disable-next-line no-unused-vars
  @user.Action('login') _login!: (_: UserInfo) => Promise<null>;

  @user.Getter('TOKEN') token!: string;

  login() {
    this._login(this.userInfo).then((res) => {
      console.log(res);
    });
  }
}
</script>
