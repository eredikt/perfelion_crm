<script setup lang="ts">
import {VTextField} from "vuetify/components";

const props = defineProps({
  ...VTextField.props,
})
</script>

<template>
  <v-text-field v-bind="{...$attrs, ...$props}" variant="outlined"/>
</template>

<style scoped>

</style>
