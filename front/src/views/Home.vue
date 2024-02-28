<template>
  <div class="d-flex mt-3 mx-10 flex-column align-center">
    <span class="text-h3">Упаковка изделия</span>
    <div class="d-flex flex-column pt-4">
      <filters @set-filters="setFilters"/>
      <v-btn class="ml-auto rounded-0 elevation-0" @click="modal" color="primary">Добавить</v-btn>
      <v-data-table :headers="headers" :items="items">
        <template #item="{item, index}">
          <tr>
            <td>{{ item.date }}</td>
            <td>{{ itemsType.getLabel(item.type) }}</td>
            <td>{{ itemsColor.getLabel(item.color) }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.count }}</td>
            <td>
              <v-chip rounded="0" :color="itemsStatus.getAttr(item.status, 'color')">
                {{ itemsStatus.getLabel(item.status) }}
              </v-chip>
              <v-btn
                v-if="item.status !== 4"
                variant="text"
                icon="mdi-arrow-right"
                @click="setStatus(item.id, index)"
              ></v-btn>
            </td>
            <td>
              <v-tooltip text="Удалить" location="top">
                <template v-slot:activator="{ props }">
                <v-btn icon="mdi-close" variant="text" color="red" v-bind="props" @click="deleteGoods(item.id, index)"/>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </div>
  <AddGoods v-model="isActiveModal" @add-goods="addGoods"/>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {IFormAddGoods, IHeaders} from "@/models/goods";
import AddGoods from "@/components/goods/modal.vue"
import Filters from "@/components/goods/Filters.vue";
import {itemsColor, itemsStatus, itemsType} from "@/service/dataGoods";
import {Api} from "@/service/api";

const items = ref<Array<IFormAddGoods>>([]);
const isActiveModal = ref<boolean>(false);
const headers: Array<IHeaders> = [
  {
    key: 'date',
    title: 'Дата',
  },
  {
    key: 'type',
    title: 'Тип',
  },
  {
    key: 'color',
    title: 'Цвет',
  },
  {
    key: 'size',
    title: 'Размер',
  },
  {
    key: 'count',
    title: 'Количество',
  },
  {
    key: 'status',
    title: 'Статус',
  },
  {
    key: 'actions',
    title: ' ',
  }
];

function addGoods(data: IFormAddGoods): void {
  items.value.push({...data, status: 1, date: new Date().toLocaleDateString()});
  setGoods(data);
  modal();
}

function modal(): void {
  isActiveModal.value = !isActiveModal.value;
}

async function setGoods(data: IFormAddGoods): Promise<void> {
  await api.post(Api.getGoods, data);
}

async function setStatus(id: number, index: number): Promise<void> {
  //@ts-ignore
  items.value[index].status += 1;
  await api.patch(Api.getGoods, {id, status: items.value[index].status});
}

async function setFilters(events: object): Promise<void> {
  items.value = await api.get(Api.getGoods, {...events});
}
async function deleteGoods(id:number, index:number): Promise<void> {
  items.value.splice(index, 1)
  await api.delete(`${Api.getGoods}/${id}`);
}

</script>

<style scoped>

</style>
