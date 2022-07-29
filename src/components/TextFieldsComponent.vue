<script setup lang="ts">
import { ref } from 'vue';
const value = ref('value');
</script>

<template>
  <v-card>
    <v-row>
      <v-col>
        <v-label>Without label property</v-label>
      </v-col>
      <v-col>
        <v-text-field data-selector="field-without-label" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-label>With label and default value</v-label>
      </v-col>
      <v-col>
        <v-text-field
          v-model="value"
          label="My Label"
          data-selector="field-with-label-and-default-value"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-label>With label only</v-label>
      </v-col>
      <v-col>
        <v-text-field label="My Label" data-selector="field-with-label" />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped></style>
