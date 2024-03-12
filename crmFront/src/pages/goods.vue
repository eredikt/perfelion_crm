<script setup lang="ts">
  import {database} from "@/lib/appwrite.ts";
  import {onMounted} from "vue";
  import {DB_NAME, DOCUMENTS} from "@/common/constants.ts";
  import {useAuthStore} from "@/store/auth.store.ts";

  const authState = useAuthStore();
  onMounted(async () => {
    console.log(await database.listDocuments(DB_NAME, DOCUMENTS.LIST));
  })

</script>

<template>
  <div>goods {{authState.user.name}}</div>
</template>

<style scoped>

</style>