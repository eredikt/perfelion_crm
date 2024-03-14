<script setup lang="ts">
import {database} from "@/lib/appwrite.ts";
import {computed, onMounted, ref} from "vue";
import {DB_NAME, DOCUMENTS} from "@/common/constants.ts";
import PTable from "@/components/ui/table/PTable.vue";
import {Header} from "@/models/components/Table";
import {TableCell} from "@/components/ui/table";
import {Models} from "appwrite";
import {IGoods} from "@/models/common/Goods.ts";
import {Button} from "@/components/ui/button";
import PIcon from "@/components/global/PIcon.vue";
import ICONS from "@/common/icons.ts";
import ModalGoods from '@/components/goods/modal.vue';

const header: Array<Header> = [
  {
    title: 'Дата',
    key: 'date_create'
  },
  {
    title: 'Тип',
    key: 'types'
  },
  {
    title: 'Размер',
    key: 'sizes'
  },
  {
    title: 'Цвет',
    key: 'colors'
  },
  {
    title: 'Количество',
    key: 'count'
  },
  {
    title: 'Статус',
    key: 'status'
  },
];

const {getData, rowsComputed, setStatus} = table();
const {modal,showModalCreateRow} = modalWindow();
onMounted(() => {
  getData();
})


function table() {
  const rows = ref<Array<Models.Document>>([]);
  const rowsComputed = computed<IGoods[]>(() => {
    return rows.value.map((item) => {
      return {
        $id: item.$id,
        date_create: item.date_create,
        count: item.count,
        sizes: item.sizes[0].size,
        types: item.types[0].name,
        status: item.status[0],
        colors: item.colors[0],
      }
    })
  });
  async function setStatus(id:string, idStatus:number):Promise<void> {
    const response = await database.updateDocument(DB_NAME, DOCUMENTS.LIST, id, {
      status: [String(++idStatus)]
    });
    if(response) await getData();
  }
  async function getData():Promise<void> {
    rows.value = (await database.listDocuments(DB_NAME, DOCUMENTS.LIST)).documents;
  }

  return {
    rowsComputed, setStatus, getData
  }
}
function modalWindow() {
  const modal = ref<boolean>(false);
  function showModalCreateRow() {
    modal.value = !modal.value;
  }

  return {
    showModalCreateRow,
    modal,
  }
}
</script>

<template>
  <div>
    <modal-goods v-model="modal" />
    <p-table :header :rows="rowsComputed" @add="showModalCreateRow">
      <template #rowTd="{row}:{row:IGoods}">
        <table-cell>{{ new Date(row.date_create).toLocaleDateString() }}</table-cell>
        <table-cell>{{ row.types }}</table-cell>
        <table-cell>{{ row.sizes }}</table-cell>
        <table-cell class="flex items-center">
          <div class="size-4 mr-2 my-auto" :style="{background: `${row.colors['color_hex']}`}"/>
          <span class="mt-1">{{ row.colors['color'] }}</span>
        </table-cell>
        <table-cell>{{ row.count }}</table-cell>
        <table-cell>
          <Button :style="{background: `${row.status['color']}`}"
            @click="setStatus(row.$id, +row.status['$id'])"
                  :disabled="+row.status['$id'] === 4"
          >
            {{ row.status['name'] }}
            <p-icon :path="ICONS.ARROW_LEFT"></p-icon>
          </Button>
        </table-cell>
      </template>
    </p-table>
  </div>
</template>

<style scoped>

</style>