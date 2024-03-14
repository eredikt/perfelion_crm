<script setup lang="ts">

import PModal from "@/components/global/PModal.vue";
import {Button} from "@/components/ui/button";
import {onMounted, ref} from "vue";
import {database} from "@/lib/appwrite.ts";
import {DB_NAME, DOCUMENTS} from "@/common/constants.ts";
import {Query} from "appwrite";
import {TypesOrStatus} from "@/models/common/Goods.ts";

const modal = defineModel();
defineEmits(['add']);
const types = ref<Array<TypesOrStatus>>([]);
// const colors = ref([]);
// const sizes = ref([]);
// const count = ref(0);

onMounted(async () => {
  types.value = (await database.listDocuments(DB_NAME, DOCUMENTS.TYPES)).documents;

})
</script>

<template>
  <p-modal v-model="modal">
    <template #title>Добавить комплект</template>
    <template #body>
      <span>
        {{types}}
      </span>
    </template>
    <template #actions>
      <Button @click="$emit('add')">Добавить</Button>
    </template>
  </p-modal>
</template>

<style scoped>

</style>