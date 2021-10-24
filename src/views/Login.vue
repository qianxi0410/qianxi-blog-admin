<template>
  <v-app>
    <v-main>
      <LoginForm />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import LoginForm from '../components/LoginForm/index.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {}
</script>

<style>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
