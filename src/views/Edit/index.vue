<template>
  <v-container fluid> <EditForm /> </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EditForm from '../../components/EditForm/index.vue';

@Component({
  components: {
    EditForm,
  },
})
export default class Home extends Vue {}
</script>
