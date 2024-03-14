<script setup lang="ts" generic="T">

import {Table, TableHead, TableHeader, TableRow, TableCell} from "@/components/ui/table/index.ts";
import {IProps} from "@/models/components/Table";
import TableBody from "@/components/ui/table/TableBody.vue";
import PIcon from "@/components/global/PIcon.vue";
import ICONS from "@/common/icons.ts";
import {Button} from "@/components/ui/button";

withDefaults(defineProps<IProps<T>>(), {});

defineEmits(['add'])
defineSlots<{rowTd(props: {row: T}): any}>()
</script>

<template>
  <div class="relative">
    <div class="bg-gray-400 right-0 absolute">
      <Button variant="link" @click="$emit('add')"><p-icon :path="ICONS.ADD" />Добавить</Button>
    </div>
  </div>
  <table class="w-full">
    <table-header>
      <TableRow>
        <TableHead v-for="(head, index) in header" :key="index">
          {{ head.title }}
        </TableHead>
      </TableRow>
    </table-header>
    <table-body>
      <table-row v-for="(row, index) in rows" :key="index">
        <slot name="rowTd" :row="row">
          <table-cell v-for="(td, indexTd) in header" :key="indexTd">{{row[td.key]}}</table-cell>
        </slot>
      </table-row>
    </table-body>
  </table>
</template>

<style scoped>

</style>