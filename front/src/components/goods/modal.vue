<script setup lang="ts">
import {Ref, defineModel, reactive, ref} from "vue";
import {itemsType, itemsColor, itemsSize} from "@/service/dataGoods";
import {IFormAddGoods} from "@/models/goods";

const emit = defineEmits(['addGoods'])
const modal:Ref<boolean> = defineModel<boolean>({default:false});
const form:Ref<IFormAddGoods> = ref({});

function addGoods() {
  emit('addGoods', form.value);
  form.value = {}
}
</script>
<template>
  <v-dialog width="500" v-model="modal">
    <v-card>
      <v-toolbar
        color="primary"
        title="Добавления изделия на упаковку"
      ></v-toolbar>
      <v-card-text>
        <v-select label="Тип" v-model="form.type" :items="itemsType" item-title="label" item-value="value" variant="outlined" rounded="0"></v-select>
        <v-select label="Размер" v-model="form.size" :items="itemsSize" item-title="label" item-value="value" variant="outlined" rounded="0"></v-select>
        <v-select label="Цвет" v-model="form.color" :items="itemsColor" item-title="label" item-value="value" variant="outlined" rounded="0" @focusout.prevent>
          <template #item="{props, item}">
            <div class="d-flex align-center">
              <div class="ml-4 block-color" :style="`background-color: ${item.raw.color || '#fff'}`" />
              <v-list-item v-bind="props" />
            </div>
          </template>
          <template #selection="{item}">
            <div class="d-flex align-center">
              <div class="mr-4 block-color" :style="`background-color: ${item.raw.color || '#fff'}`" />
              <span>{{item.title}}</span>
            </div>
          </template>
        </v-select>
        <v-text-field label="Количество" v-model="form.count" variant="outlined" rounded="0"></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          variant="text"
          @click="addGoods"
        >Добавить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.block-color {
  width: 25px;
  height: 25px;
}
</style>
