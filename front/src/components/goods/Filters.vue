<script setup lang="ts">
  import PDatePicker from "@/components/global/PDatePicker.vue";
  import PSelect from "@/components/global/PSelect.vue";
  import PTextField from "@/components/global/PTextField.vue";
  import {itemsStatus, itemsType, itemsColor} from "@/service/dataGoods";
  import {onMounted, reactive} from "vue";

  const emits = defineEmits(['setFilters'])
  const form = reactive({
    date: new Date().toLocaleDateString(),
  })
  onMounted(() => {
    setFilter();
  })
  function setFilter() {
    emits('setFilters', form);
  }
</script>

<template>
  <div class="d-flex v-col-12 flex-wrap px-0">
    <PSelect v-model="form.status" :items="itemsStatus" label="Статус" class="v-col-4" clearable density="compact" hide-details/>
    <PSelect v-model="form.type" :items="itemsType" label="Тип" class="v-col-4" clearable density="compact" hide-details/>
    <PSelect v-model="form.color" :items="itemsColor" label="Цвет" class="v-col-4" clearable density="compact" hide-details/>
    <p-text-field v-model="form.size" label="Размер" class="v-col-4" clearable density="compact" hide-details/>
    <p-date-picker v-model="form.date" class="v-col-4" label="Дата" clearable density="compact" hide-details></p-date-picker>
    <div class="v-col-4">
      <v-btn color="primary" block @click="setFilter">Поиск</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
