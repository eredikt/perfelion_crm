<script setup lang="ts">
import {VSelect} from "vuetify/components";

const props = defineProps({
  ...VSelect.props,
  itemValue: {
    type: String,
    default: 'value',
  },
  itemTitle: {
    type: String,
    default: 'label',
  }
})
</script>

<template>
  <v-select v-bind="{...$attrs, ...$props}" variant="outlined"/>
</template>

<style scoped>

</style>
