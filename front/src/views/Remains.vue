<script setup lang="ts">
import {apiWb} from "@/plugins/axios";
import {onMounted, ref} from "vue";
import PDatePicker from "@/components/global/PDatePicker.vue";

const data = ref([]);

// onMounted(() => {
//   const response = apiWb.get('stocks');
// })

async function changeDate($event:string) {
  // console.log($event);
  data.value = await apiWb.get('stocks', $event);
}
</script>

<template>
  <div class="d-flex mt-3 mx-10 flex-column align-center">
    <span class="text-h3">Остатки</span>
  </div>
  <p-date-picker label="Дата" @change="changeDate" />
</template>

<style scoped>

</style>
