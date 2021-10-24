<template>
  <v-form ref="form" v-model="valid" class="pa-4">
    <v-text-field
      outlined
      v-model="user.username"
      :rules="[rules.required, rules.max]"
      hint="Characters <= 16"
      label="Username"
    >
      <v-icon slot="prepend" color="primary" class="mr-2"> mdi-account </v-icon>
    </v-text-field>
    <v-text-field
      outlined
      v-model="user.password"
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
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  valid = false;

  user = {
    username: '',
    password: '',
  };

  isPassword: boolean = true;

  rules = {
    required: (value: string) => !!value || 'Required.',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    max: (v: string) => v.length <= 16 || 'Max 16 characters',
  };

  login(): void {
    console.log(this.user);
  }
}
</script>
