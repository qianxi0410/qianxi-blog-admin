<template>
  <v-row class="pa-8">
    <v-col cols="6">
      <v-tabs background-color="#ECE7E7" class="mt-n3">
        <v-tab @click="componentName = 'Content'">Content</v-tab>
        <v-tab @click="componentName = 'File'">File</v-tab>
      </v-tabs>
      <transition name="slide-x-transition" mode="out-in">
        <keep-alive>
          <component :is="componentName" />
        </keep-alive>
      </transition>
    </v-col>
    <v-spacer />
    <v-col cols="5">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="title"
          :counter="10"
          :rules="nameRules"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          :counter="10"
          :rules="nameRules"
          label="Description"
          required
        ></v-text-field>

        <v-text-field
          v-model="url"
          :rules="emailRules"
          label="Url"
          required
        ></v-text-field>

        <v-parallax v-if="url !== ''" height="200" :src="url"></v-parallax>

        <v-switch
          label="Blur"
          color="primary"
          value
          input-value="true"
        ></v-switch>

        <v-text-field
          v-model="url"
          :rules="emailRules"
          label="Tags"
          required
        ></v-text-field>

        <v-btn
          block
          class="justify-end mt-3"
          :disabled="!valid"
          color="primary"
          plain
          @click="validate"
        >
          Submit
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Content from './Content.vue';
import File from './File.vue';

@Component({
  components: {
    Content,
    File,
  },
})
export default class EditForm extends Vue {
  componentName = 'Content';
  url = '';
}
</script>
