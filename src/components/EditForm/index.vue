<template>
  <v-row class="pa-8">
    <v-col cols="6">
      <v-textarea
        height="520px"
        outlined
        counter
        label="Please input your content"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>
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

        <v-textarea
          v-model="description"
          :counter="10"
          :rules="nameRules"
          label="Description"
          required
        ></v-textarea>

        <v-text-field
          v-model="url"
          :rules="emailRules"
          label="Url"
          required
        ></v-text-field>

        <v-text-field
          v-model="url"
          :rules="emailRules"
          label="Tags"
          required
        ></v-text-field>

        <v-btn
          class="justify-end"
          :disabled="!valid"
          color="success"
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

@Component
export default class EditForm extends Vue {}
</script>
