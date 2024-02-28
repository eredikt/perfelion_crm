<script setup lang="ts">
import {ref, watch} from "vue";
const emits = defineEmits(['change'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});
const menu = ref<boolean>(false);
const date = ref<Date>(new Date());
const model = defineModel<string>({default: ''});

watch(date, (value) => {
  menu.value = false;
  model.value = new Date(value).toLocaleDateString();
  emits('change', model.value);
})
</script>
<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ props }">
      <v-text-field
        v-model="model"
        variant="outlined"
        :readonly="true"
        :label
        clearable
        v-bind="{...$attrs, ...props}"
      />
    </template>
    <v-date-picker
      color="primary"
      v-model="date"
    ></v-date-picker>
  </v-menu>
</template>

<style scoped>

</style>
